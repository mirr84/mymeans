import React from 'react';

import lifecycle from 'react-pure-lifecycle';
import {connector} from "../../store/utils/connector";
import {Col, Container, Row} from "reactstrap";

const methods = {
    componentDidMount(props) {
    }
}

const Desktop = ({state, dispatch, head, footer, content, menuMobile}) => {

    return (
        <Container fluid={true}>

            {head ? <Row> <Col>{head}</Col> </Row> : ''}

            {menuMobile ? <Row> <Col>{menuMobile}</Col> </Row> : ''}

            {content ? <Row><Col>{content}</Col></Row> : ''}

            {footer ? <Row> <Col>{footer}</Col></Row> : ''}

        </Container>
    );

}

export default connector(lifecycle(methods)(Desktop));