import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from 'react-pure-lifecycle';
import WindowSizeListener from 'react-window-size-listener';
import Layout from "../Layout";

const methods = {
    componentDidMount(props) {
    }
}

const App = ({state, dispatch}) => {
    return (
        <div>
            <WindowSizeListener
                onResize={windowSize => dispatch.setter('commonReducer', {
                    windowWidth: windowSize.windowWidth,
                    windowHeight: windowSize.windowHeight
                })}
            />

            <Layout head={'head'}
                    footer={'footer'}
                    content={'content'}
                    left={'left'}
                    right={'right'} />

        </div>
    )
}

export default connector(lifecycle(methods)(App));