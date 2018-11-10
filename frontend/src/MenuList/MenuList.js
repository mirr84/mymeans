import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Icon from '@material-ui/core/Icon';

import {connector} from "../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

const methods = {
    componentDidMount(props) {
        props.dispatch.setter('menuReducer', {});
    }
}

const MenuList = ({state, dispatch}) => {
    return (
        <div>

            {
                state.menuReducer.menu.map(
                    (item, idx) => (
                        <ListItem key={idx} button selected={state.menuReducer.select === item.code} onClick={() => dispatch.setter('menuReducer', {select: item.code})}>
                            <ListItemIcon>
                                <Icon>{item.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    )
                )
            }

        </div>
    )
}

export default connector(lifecycle(methods)(MenuList));