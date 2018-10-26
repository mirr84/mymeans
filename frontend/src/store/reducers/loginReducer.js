import {ACTION_SETTER} from "../actions/actionConst";
import {getLocalStorage} from "../utils/getLocalStorage";

const initState = {

    login: '',
    password: '',
    email: '',
    token: '',

    isAuth: false,
    isProgressReg: false

}

export const loginReducer = (state = getLocalStorage('loginReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.reducer === 'loginReducer') {
        if (action.type === ACTION_SETTER) {
            newState = Object.assign(state, action.payload);
        }
    }

    return newState;

}