import React from 'react';

import lifecycle from 'react-pure-lifecycle';
import {connector} from "../../store/utils/connector";
import {Card, CardBody} from "reactstrap";

const methods = {
    componentDidMount(props) {
    }
}

const Footer = ({state, dispatch}) => {

    return (
        <Card>
            <CardBody>
                Footer
            </CardBody>
        </Card>
    );

}

export default connector(lifecycle(methods)(Footer));