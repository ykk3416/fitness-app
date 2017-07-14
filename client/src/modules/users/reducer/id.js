import {ADD_USER, DELETE_USER} from "../../modules/Users/actions";

export default (state = 0, action) => {
    switch (action.type) {
        case ADD_USER: {
            return action.user._id;
        }
        case DELETE_USER: {
            return 0;
        }
        default: {
            return state;
        }
    }
};