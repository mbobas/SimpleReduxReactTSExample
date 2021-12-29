import { combineReducers } from 'redux';
import bankReducer from "./bankReducer";
import countRducer from "./countReducer";
import toggleReducer from './toggleReducer';

const reducers = combineReducers({
    counts: countRducer,
    bank: bankReducer,
    toggle: toggleReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>