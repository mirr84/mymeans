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

            {
                head? <Row> <Col>{head}</Col> </Row> : ''
            }

            <Row>
                { left?<Col lg={2}>{left}</Col>:''}
                { content?<Col>{content}</Col>:''}
                { right?<Col lg={2}>{right}</Col>:''}
            </Row>

            {
                footer?<Row><Col>{footer}</Col></Row>:''
            }

        </Container>
    );

}

export default connector(lifecycle(methods)(Layout));