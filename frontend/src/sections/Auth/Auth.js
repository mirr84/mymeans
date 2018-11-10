import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";

const methods = {
    componentDidMount(props) {
    }
}

const styles = theme => ({
    root: {
        width: '100%',
    }
});

const Auth = ({state, dispatch, classes}) => {
    return (
        <div className={classes.root}>

            <Typography variant="h4" gutterBottom component="h2">
                Авторизация
            </Typography>



        </div>
    )
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connector(lifecycle(methods)(withStyles(styles)(Auth)));