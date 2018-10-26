import React from 'react';

import lifecycle from 'react-pure-lifecycle';
import {connector} from "../store/utils/connector";

const methods = {
    componentDidMount(props) {
    }
}

const Test = ({state, dispatch}) => {

    return (
        <div>
            {
                state.commonReducer.windowWidth
            }
            {
                state.commonReducer.windowHeight
            }
        </div>
    );

}

export default connector(lifecycle(methods)(Test));