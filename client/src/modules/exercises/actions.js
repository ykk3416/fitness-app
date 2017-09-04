import {get, post, remove} from "../../util/apiCaller";
import * as e from "./actionTypes";

export const addExercise = exercise => ({
    type: e.ADD,
    exercise
});

export const addExercises = exercises => ({
    type: e.ADD_LIST,
    exercises
});

export const deleteExercise = id => ({
    type: e.DELETE,
    id
});

export const fetchExercises = user =>
    dispatch => get(`${user}/exercises`)
        .then(({data}) => dispatch(addExercises(data)));

export const fetchExercise = id =>
    dispatch => get(`exercises/${id}`)
        .then(({data}) => dispatch(addExercise(data)));

export const addExerciseRequest = (exercise, user) =>
    dispatch => post(`${user}/exercises`, exercise)
        .then(({data}) => dispatch(addExercise(data)));

export const deleteExerciseRequest = id =>
    dispatch => remove(`exercises/${id}`)
        .then(({data}) => dispatch(deleteExercise(data._id)));

