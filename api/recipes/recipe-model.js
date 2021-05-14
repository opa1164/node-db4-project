const db = require('../../data/db-config');

async function find() { 
    await db("recipes as rcp")
    .select("rcp.*")
    .count("st.step_id as number_of_steps")
    .leftJoin("steps as st", "rcp.recipe_id", "st.recipe_id")
    .groupBy("rcp.recipe_id")
    .orderBy("rcp.recipe_id", "asc")
    .then(result => {return result})
}

async function findById(recipe_id) { 
    const data = await db("recipes as rcp")
    .select("rcp.recipe_name", "st.*", "rcp.recipe_id")
    .leftJoin("steps as st", "rcp.recipe_id", "st.recipe_id")
    .leftJoin("ri_quantities as ri", "st.step_id", "ri.step_id")
    .leftJoin("ingredients as in", "in.ingredient_id", "ri.ingredient_id")
    .select(
        'rcp.recipe_id',
        'rcp.recipe_name',
        'st.step_id',
        'st.step_number',
        'st.step_instructions',
        'in.ingredient_id',
        'in.ingredient_name',
        'ri.quantity',
    )
    .where("rcp.recipe_id", recipe_id)
    .orderBy("st.step_number", "asc");
    const finalObj = {
        recipe_id: data[0].recipe_id,
        recipe_name: data[0].recipe_name,
        steps: data.reduce((acc, row) =>{
            if(!row.ingredient_id)
                return acc.concat({
                    step_id: row.step_id,
                    step_number: row.step_number,
                    step_instructions: row.step_instructions
                })
            if(row.ingredient_id && !acc.find(step => step.step_id === row.step_id)){
                return acc.concat({
                    step_id: row.step_id,
                    step_number: row.step_number,
                    step_instructions: row.step_instructions,
                    ingredients: [{
                        ingredient_id: row.ingredient_id,
                        ingredient_name: row.ingredient_name,
                        quantity: row.quantity
                    }]
                })
            }
            const currentStep = acc.find(step => step.step_id === row.step_id)
            currentStep.ingredients.push({
                ingredient_id: row.ingredient_id,
                ingredient_name: row.ingredient_name,
                quantity: row.quantity
            })
            return acc;
        },[])
    }
    
    return finalObj;

}

function findSteps(recipe_id) { 
    return db("steps as st")
    .select("st.step_id", "st.step_number", "st.instructions", "rcp.recipe_name")
    .leftJoin("recipes as sc", "rcp.recipe_id", "st.recipe_id")
    .where("rcp.recipe_id", recipe_id)
    .orderBy("st.step_number", "asc")  
}

function add(recipe) { 
    console.log(db("recipes").insert(recipe));
    return db("recipes").insert(recipe)
}

function addStep(recipe_id, step) { 
    return db("steps")
    .insert(Object.assign(step, {recipe_id}))
    .then(()=>{
        return findSteps(recipe_id)
    })
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
}
