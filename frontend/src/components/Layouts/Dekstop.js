import React from 'react';

import lifecycle from 'react-pure-lifecycle';
import {connector} from "../../store/utils/connector";
import {Col, Container, Row} from "reactstrap";

const methods = {
    componentDidMount(props) {
    }
}

const Desktop = ({state, dispatch, head, footer, content, menuDekstop}) => {

    return (
        <Container fluid={true}>

            {head ? <Row> <Col lg={2}/> <Col>{head}</Col> </Row> : ''}

            <Row>
                {menuDekstop ? <Col lg={2}>{menuDekstop}</Col> : ''}
                {content ? <Col>{content}</Col> : ''}
            </Row>

            {footer ? <Row> <Col lg={2}/> <Col>{footer}</Col></Row> : ''}

        </Container>
    );

}

export default connector(lifecycle(methods)(Desktop));