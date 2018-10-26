import axios from "axios";
import md5 from 'md5';

export const doLogin = (props) => {

    props.dispatch.setter('loginReducer', {isProgressReg: true});
    props.dispatch.setter('loginReducer', {isProgressReg: false});

}