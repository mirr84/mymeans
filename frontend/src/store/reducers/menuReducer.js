import {ACTION_SETTER} from "../actions/actionConst";
import {getLocalStorage} from "../utils/getLocalStorage";

const initState = {

    open: false,
    select: 'news',

    menu: [
        {
            title: 'Новости', auth: -1, code: 'news', icon: 'dashboard'
        },
        {
            title: 'Авторизация', auth: 0, code: 'auth', icon: 'people'
        },
        {
            title: 'Регистрация', auth: 0, code: 'reg', icon: 'people'
        },
        {
            title: 'TestSection', auth: -1, code: 'test', icon: 'dashboard'
        },
        {
            title: 'Счета', auth: 1, code: 'accounts', icon: 'dashboard'
        }
    ]
}

export const menuReducer = (state = getLocalStorage('menuReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.reducer === 'menuReducer') {
        if (action.type === ACTION_SETTER) {
            newState = Object.assign(newState, action.payload);
        }
    }

    return newState;

}

