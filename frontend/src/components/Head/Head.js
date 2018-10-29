import React from 'react';

import lifecycle from 'react-pure-lifecycle';
import {connector} from "../../store/utils/connector";
import {Card, CardBody} from "reactstrap";

const methods = {
    componentDidMount(props) {
    }
}

const Head = ({state, dispatch}) => {

    return (
        <Card>
            <CardBody>
                Head
            </CardBody>
        </Card>
    );

}

export default connector(lifecycle(methods)(Head));