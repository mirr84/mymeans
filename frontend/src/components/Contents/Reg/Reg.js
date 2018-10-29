import React from 'react';

import lifecycle from 'react-pure-lifecycle';
import {connector} from "../../../store/utils/connector";
import {Card, CardBody} from "reactstrap";

const methods = {
    componentDidMount(props) {
    }
}

const Reg = ({state, dispatch}) => {

    return (
        <div>
            Reg
        </div>
    );

}

export default connector(lifecycle(methods)(Reg));