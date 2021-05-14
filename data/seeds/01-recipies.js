// DO NOT CHANGE THIS FILE
const recipes = [
  { recipe_name: 'World Domination' },
  { recipe_name: 'Get Rich Quick' },
  { recipe_name: 'Revenge' },
  { recipe_name: 'More Instagram Followers' },
  { recipe_name: 'Find the Holy Grail' },
  { recipe_name: 'Steal Coworker\'s Identity' },
  { recipe_name: 'Have fun!' },
]

exports.recipes = recipes

exports.seed = function (knex) {
  return knex('recipes').insert(recipes)
}
