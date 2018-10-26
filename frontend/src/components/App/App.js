import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from 'react-pure-lifecycle';

const methods = {
    componentDidMount(props) {
    }
}

const App = ({state, dispatch}) => {
    return (
        <div>

            111

        </div>
    );
}

export default connector(lifecycle(methods)(App));
