// DO NOT CHANGE THIS FILE
const ingredients = [
  { ingredient_name: 'World Domination' },
  { ingredient_name: 'Get Rich Quick' },
  { ingredient_name: 'Revenge' },
  { ingredient_name: 'More Instagram Followers' },
  { ingredient_name: 'Find the Holy Grail' },
  { ingredient_name: 'Steal Coworker\'s Identity' },
  { ingredient_name: 'Have fun!' },
]

exports.ingredients = ingredients

exports.seed = function (knex) {
  return knex('ingredients').insert(ingredients)
}
