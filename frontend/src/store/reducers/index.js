import {combineReducers} from 'redux';

import {loginReducer} from "./loginReducer";
import {commonReducer} from "./commonReducer";
import {menuReducer} from "./menuReducer";

export default combineReducers(
    {

        commonReducer,
        loginReducer,
        menuReducer

    }
);