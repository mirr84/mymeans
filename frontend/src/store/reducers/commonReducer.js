import {ACTION_SETTER} from "../actions/actionConst";
import {getLocalStorage} from "../utils/getLocalStorage";

const initState = {

    windowWidth: 0,
    windowHeight: 0

}

export const commonReducer = (state = getLocalStorage('commonReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.reducer === 'commonReducer') {
        if (action.type === ACTION_SETTER) {
            newState = Object.assign(state, action.payload);
        }
    }

    return newState;

}