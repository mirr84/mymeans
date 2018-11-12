import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Zoom from '@material-ui/core/Zoom';

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
                        <ListItem key={idx} button
                                  selected={state.menuReducer.select === item.code}
                                  disabled={state.menuReducer.loader}
                                  onClick={() => dispatch.setter('menuReducer', {select: item.code, loader: false /*state.menuReducer.select !== item.code */ })}>
                            <ListItemIcon>
                                {
                                    state.menuReducer.open ?
                                        <Icon>{item.icon}</Icon>
                                        :
                                        <Tooltip title={item.title} TransitionComponent={Zoom} placement="right">
                                            <Icon>{item.icon}</Icon>
                                        </Tooltip>
                                }
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