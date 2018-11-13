import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";

import SimpleLineChart from "../../components/lineChart/SimpleLineChart";
import SimpleTable, {createData} from "../../components/table/SimpleTable";
import SimpleYearColendar from "../../components/calendar/SimpleYearColendar";

const methods = {
    componentDidMount(props) {
        props.dispatch.setter('menuReducer', {loader: false});
    }
}

const styles = theme => ({
    root: {
        width: '100%',
    }
});

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
]

const TestSection = ({state, dispatch, classes}) => {
    return (
        <div className={classes.root}>

            <Typography variant="h4" gutterBottom component="h2">
                TestSection
            </Typography>

            <SimpleLineChart/>

            <br/>

            <SimpleTable data={data}  />

            <br/>

            <SimpleYearColendar />

            <br/>

        </div>
    )
}

TestSection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connector(lifecycle(methods)(withStyles(styles)(TestSection)));