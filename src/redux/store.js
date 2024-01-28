import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";
import messageRoomReducer from "./reducers/messageRoomReducer";
import sessionReducer from "./reducers/sessionReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    messageRoom: messageRoomReducer,
    session: sessionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;