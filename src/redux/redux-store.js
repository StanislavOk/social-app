import { createStore, combineReducers, applyMiddleware } from 'redux';
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReduser from "./UsersReduser";
import authReducer from './Auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    Profile: ProfileReducer,
    DialogsPage: DialogsReducer,
    usersPage: UsersReduser,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;