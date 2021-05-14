exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.text('recipe_name', 128)
        .notNullable();
      tbl.text('created_at', 128);
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id');
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('step_instructions')
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id');
      tbl.text('ingredient_name', 128)
        .unsigned()
        .notNullable();
    })
    .createTable('ri_quantities', tbl => {
      tbl.increments('ri_quantities_id');
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.float('quantity');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExist("recipes")
    .dropTableIfExists('steps')
    .dropTableIfExist("ingredients")
    .dropTableIfExist("ri_quantities");
};
