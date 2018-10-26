import React, { Component } from 'react';

import {connector} from "../../store/utils/connector";
import windowSize from "react-window-size";


class App extends Component {

    componentDidMount(props) {
    }

    render() {
        return (
            <p>
                Screen width is: {this.props.windowWidth}
                <br />
                Screen height is: {this.props.windowHeight}
            </p>
        );
    }

}

export default connector(windowSize(App));
