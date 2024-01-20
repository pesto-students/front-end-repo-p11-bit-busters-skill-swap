import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";


const rootReducer = combineReducers({
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;