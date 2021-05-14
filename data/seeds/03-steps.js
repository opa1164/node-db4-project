
const steps = [
  { recipe_id: 1, step_number: 2, step_instructions: 'crack cyber security' },
  { recipe_id: 1, step_number: 1, step_instructions: 'solve prime number theory' },
  { recipe_id: 1, step_number: 3, step_instructions: 'blackmail world leaders' },
  { recipe_id: 2, step_number: 2, step_instructions: 'profit' },
  { recipe_id: 2, step_number: 1, step_instructions: 'collect all the sheep in Scotland' },
  { recipe_id: 3, step_number: 3, step_instructions: 'smash box with a hammer (evil laugh)' },
  { recipe_id: 3, step_number: 2, step_instructions: 'put the flea in a box' },
  { recipe_id: 3, step_number: 1, step_instructions: 'turn your enemy into a flea' },
  { recipe_id: 4, step_number: 1, step_instructions: 'write a bot to randomly like posts and follow pages' },
  { recipe_id: 4, step_number: 3, step_instructions: 'try to ignore the persistent feeling of loneliness' },
  { recipe_id: 4, step_number: 2, step_instructions: 'watch instagram followers increase' },
  { recipe_id: 5, step_number: 1, step_instructions: 'quest and quest some more' },
  { recipe_id: 6, step_number: 4, step_instructions: 'seamlessly take their place' },
  { recipe_id: 6, step_number: 3, step_instructions: 'artfully craft accessories' },
  { recipe_id: 6, step_number: 1, step_instructions: 'steal coworker\'s name tag' },
  { recipe_id: 6, step_number: 2, step_instructions: 'procure facial hair' }
]

exports.steps = steps;

exports.seed = function (knex) {
  return knex('steps').insert(steps)
}
