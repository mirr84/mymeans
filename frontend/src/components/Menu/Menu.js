import React from 'react';

import lifecycle from 'react-pure-lifecycle';
import {connector} from "../../store/utils/connector";
import {ListGroup, ListGroupItem} from "reactstrap";

import Sticky from 'react-sticky-el';

const methods = {
    componentDidMount(props) {
    }
}

const contentMenu =[
    {
        icon: 'icon-class-name',
        label: 'Новости',
        onClick: (props) => props.dispatch.setter('menuReducer', {select: 'news'}),
    },
    {
        icon: 'icon-class-name',
        label: 'Авторизация',
        onClick: (props) => props.dispatch.setter('menuReducer', {select: 'auth'}),
    },
    {
        icon: 'icon-class-name',
        label: 'Регистрация',
        onClick: (props) => props.dispatch.setter('menuReducer', {select: 'reg'}),
    },
];

const Menu = ({state, dispatch}) => {

    return (
        <div>
            <Sticky>
                <br/>
                <ListGroup>
                    {
                        contentMenu.map(
                            (item, idx) => <ListGroupItem key={idx} onClick={() => item.onClick({state, dispatch})}>{item.label}</ListGroupItem>
                        )
                    }
                </ListGroup>
            </Sticky>
        </div>
    );

}

export default connector(lifecycle(methods)(Menu));