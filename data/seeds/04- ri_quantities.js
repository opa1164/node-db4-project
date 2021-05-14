// DO NOT CHANGE THIS FILE
const ri_quantities = [
  { step_id: 1, ingredient_id: 2, quantity: .1},
  { step_id: 1, ingredient_id: 1, quantity: .2 },
  { step_id: 1, ingredient_id: 3, quantity: .3 },
  { step_id: 2, ingredient_id: 2, quantity: .4 },
  { step_id: 2, ingredient_id: 1, quantity: .5 },
  { step_id: 3, ingredient_id: 3, quantity: .6 },
  { step_id: 3, ingredient_id: 2, quantity: .7 },
  { step_id: 3, ingredient_id: 1, quantity: .8 },
  { step_id: 4, ingredient_id: 1, quantity: .9 },
  { step_id: 4, ingredient_id: 3, quantity: 1.0 },
  { step_id: 4, ingredient_id: 2, quantity: 1.1 },
  { step_id: 5, ingredient_id: 1, quantity: 1.2 },
  { step_id: 6, ingredient_id: 4, quantity: 1.3 },
  { step_id: 6, ingredient_id: 3, quantity: 1.4 },
  { step_id: 6, ingredient_id: 1, quantity: 1.5 },
  { step_id: 6, ingredient_id: 2, quantity: 1.6 }]

exports.ri_quantities = ri_quantities

exports.seed = function (knex) {
  return knex('ri_quantities').insert(ri_quantities)
}
