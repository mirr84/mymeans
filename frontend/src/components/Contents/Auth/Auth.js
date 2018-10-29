import React from 'react';

import lifecycle from 'react-pure-lifecycle';
import {connector} from "../../../store/utils/connector";
import {Card, CardBody} from "reactstrap";

const methods = {
    componentDidMount(props) {
    }
}

const Auth = ({state, dispatch}) => {

    return (
        <div>
            Auth
        </div>
    );

}

export default connector(lifecycle(methods)(Auth));