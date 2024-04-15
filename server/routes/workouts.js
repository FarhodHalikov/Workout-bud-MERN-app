// packages
const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutController')

// create instance of the express Router
const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET single workout
router.get('/:id', getWorkout) 
//Post new workout
router.post('/', createWorkout)

// DELETE workout
router.delete('/:id', deleteWorkout) 

// UPDATE workout
router.patch('/:id', updateWorkout) 

module.exports = router;