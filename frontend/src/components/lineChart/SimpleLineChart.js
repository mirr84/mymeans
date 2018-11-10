import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";

const methods = {
    componentDidMount(props) {
    }
}

const styles = {
    root: {
        borderRadius: 0,
        boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.2)'
    }
};

const data = [
    { name: 'Mon', Visits: 2200, Orders: 3400 },
    { name: 'Tue', Visits: 1280, Orders: 2398 },
    { name: 'Wed', Visits: 5000, Orders: 4300 },
    { name: 'Thu', Visits: 4780, Orders: 2908 },
    { name: 'Fri', Visits: 5890, Orders: 4800 },
    { name: 'Sat', Visits: 4390, Orders: 3800 },
    { name: 'Sun', Visits: 4490, Orders: 4300 },
    { name: 'Mon', Visits: 2200, Orders: 3400 },
    { name: 'Tue', Visits: 1280, Orders: 2398 },
    { name: 'Wed', Visits: 5000, Orders: 4300 },
    { name: 'Thu', Visits: 4780, Orders: 2908 },
    { name: 'Fri', Visits: 5890, Orders: 4800 },
    { name: 'Sat', Visits: 4390, Orders: 3800 },
    { name: 'Sun', Visits: 4490, Orders: 4300 },
    { name: 'Mon', Visits: 2200, Orders: 3400 },
    { name: 'Tue', Visits: 1280, Orders: 2398 },
    { name: 'Wed', Visits: 5000, Orders: 4300 },
    { name: 'Thu', Visits: 4780, Orders: 2908 },
    { name: 'Fri', Visits: 5890, Orders: 4800 },
    { name: 'Sat', Visits: 4390, Orders: 3800 },
    { name: 'Sun', Visits: 4490, Orders: 4300 },
];

const SimpleLineChart = ({state, dispatch, classes}) =>
    <Paper className={classes.root}>
        <ResponsiveContainer height={320}>
            <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Tooltip />
                {/*<Legend />*/}
                <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    </Paper>

export default connector(lifecycle(methods)(withStyles(styles)(SimpleLineChart)));