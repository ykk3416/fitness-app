import mongoose from "mongoose";
import {Mockgoose} from "mockgoose";
import setUpTestDb, {setUpModels} from "../../util/setUpTestDb";
import User from "../user";
import Exercise from "../exercise";
import ExerciseInstance from "../exerciseInstance";

let testValues;
const mockgoose = new Mockgoose(mongoose);

beforeEach(() => {
    return setUpTestDb()
        .then(setUpModels)
        .then(data => testValues = data)
});

afterEach(() => {
    return mockgoose.helper.reset().then(() => {
        mongoose.disconnect();
    });
});

describe("Exercise Middleware", () => {
   it("should remove its own instances in workouts and exerciseInstances after removal", async () => {
        const {exercises} = testValues;
        await exercises[0].remove();

        const dbExercise = await Exercise.findById(exercises[0]._id);
        const dbExerciseInstance = await ExerciseInstance.findOne({exercise: exercises[0]._id});
        const dbUser = await User.findOne({exercises: exercises[0]._id});

        expect(dbExercise).toBe(null);
        expect(dbExerciseInstance).toBe(null);
        expect(dbUser).toBe(null);
    });
});
