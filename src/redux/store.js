import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;