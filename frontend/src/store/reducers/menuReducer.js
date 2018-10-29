import {ACTION_SETTER} from "../actions/actionConst";
import {getLocalStorage} from "../utils/getLocalStorage";

const initState = {

    select: ''

}

export const menuReducer = (state = getLocalStorage('menuReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.reducer === 'menuReducer') {
        if (action.type === ACTION_SETTER) {
            newState = Object.assign(state, action.payload);
        }
    }

    return newState;

}