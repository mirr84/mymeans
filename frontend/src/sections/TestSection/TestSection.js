import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";

import SimpleLineChart from "../../components/lineChart/SimpleLineChart";
import SimpleTable from "../../components/table/SimpleTable";
import SimpleYearColendar from "../../components/calendar/SimpleYearColendar";

const methods = {
    componentDidMount(props) {
    }
}

const styles = theme => ({
    root: {
        width: '100%',
    }
});

const TestSection = ({state, dispatch, classes}) => {
    return (
        <div className={classes.root}>

            <Typography variant="h4" gutterBottom component="h2">
                TestSection
            </Typography>

            <SimpleLineChart />

            <br/>

            <SimpleTable />

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