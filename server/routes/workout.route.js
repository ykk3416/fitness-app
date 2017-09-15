import {Router} from "express";
import {getWorkouts, getWorkout, addWorkout, deleteWorkout} from "../controllers/workout.controller";
const router = Router();

router.route("/users/:userId/workouts")
    .get(getWorkouts);

router.route("/users/:userId/workouts/:workoutId")
    .get(getWorkout)
    .post(addWorkout)
    .delete(deleteWorkout);

export default router;




