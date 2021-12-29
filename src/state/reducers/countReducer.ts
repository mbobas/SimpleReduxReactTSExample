import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialState = 0;

const countRducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_1:
            return state + 1;
        case ActionType.MULTIPLE:
            return state * action.payload;
        default:
            return state;
    }
}

export default countRducer;