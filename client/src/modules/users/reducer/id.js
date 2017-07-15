import * as u from "../actionTypes";

export default (state = 0, action) => {
    switch (action.type) {
        case u.ADD: {
            return action.user._id;
        }
        case u.DELETE: {
            return 0;
        }
        default: {
            return state;
        }
    }
};