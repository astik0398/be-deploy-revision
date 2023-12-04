import { reducer as userReducer } from "./reducer";
import {thunk} from 'redux-thunk'
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
    userReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))