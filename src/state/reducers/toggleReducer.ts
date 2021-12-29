import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialState = false;

const toggleReducer = (state: boolean = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.TOGGLE:
            return !state;
        default:
            return state;
    }
}

export default toggleReducer;