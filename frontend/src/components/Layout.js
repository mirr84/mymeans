import React from 'react';

import lifecycle from 'react-pure-lifecycle';
import {connector} from "../store/utils/connector";
import {Col, Container, Row} from "reactstrap";

const methods = {
    componentDidMount(props) {
    }
}

const Layout = ({state, dispatch, head, footer, content, left, right}) => {

    return (
        <Container>
            <Row>
                <Col>{head}</Col>
            </Row>
            <Row>
                <Col>{left}</Col>
                <Col>{content}</Col>
                <Col>{right}</Col>
            </Row>
            <Row>
                <Col>{footer}</Col>
            </Row>
        </Container>
    );

}

export default connector(lifecycle(methods)(Layout));