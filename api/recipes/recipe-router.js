// DO NOT CHANGE THIS FILE
const express = require('express')
const recipes = require('./recipe-model.js')

const router = express.Router()


router.get('/', (req, res, next) => {
  recipes.find()
    .then(recipes => {
      res.json(recipes)
    })
    .catch(next)
})

router.get('/:recipe_id', (req, res, next) => {
  const { recipe_id } = req.params

  recipes.findById(recipe_id)
    .then(recipe => {
      res.json(recipe)
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    sageAdvice: 'Finding the real error is 90% of the bug fix',
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router
