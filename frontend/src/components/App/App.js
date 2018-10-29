import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from 'react-pure-lifecycle';
import WindowSizeListener from 'react-window-size-listener';

import Desktop from "../Layouts/Dekstop";
import Mobile from "../Layouts/Mobile";

import Main from "../Main/Main";

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

            { state.commonReducer.windowWidth > 1000 ? <Main Layout={Desktop} /> : '' }
            { state.commonReducer.windowWidth < 1000 ? <Main Layout={Mobile} /> : '' }

        </div>
    )
}

export default connector(lifecycle(methods)(App));