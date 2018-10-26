import {combineReducers} from 'redux';

import {loginReducer} from "./loginReducer";
import {commonReducer} from "./commonReducer";

export default combineReducers(
    {

        commonReducer,
        loginReducer

    }
);