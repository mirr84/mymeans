import React from 'react';

import {Calendar, CalendarControls} from "react-yearly-calendar";

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";
import {withStyles} from "@material-ui/core";

import moment from "moment";
import 'moment/locale/ru'

import './calendar.css';
import Paper from "@material-ui/core/Paper/Paper";

const methods = {
    componentDidMount(props) {
        moment.locale("ru");
    }
}

const styles = {
    root: {
        borderRadius: 0,
        boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.2)',
        overflow: 'auto',
        marginLeft: 1
    }
};

const customCSSclasses = {
    holidays: [],
    spring: {},
    summer: {},
    autumn: {},
    winter: {},
    weekend: 'Sat,Sun',
}

const SimpleYearColendar = ({state, dispatch, classes}) =>
    <Paper id='calendar' className={classes.root}>
        <CalendarControls
            className={classes.table}
            year={2018}
            showTodayButton={true}
            onPrevYear={() => {
            }}
            onNextYear={() => {
            }}
            goToToday={() => {
            }}
        />
        <div className={classes.root}>
            <Calendar
                year={2018}
                onPickDate={(date) => alert(date)}
                firstDayOfWeek={2}
                customClasses={customCSSclasses}
            />
        </div>
    </Paper>

export default connector(lifecycle(methods)(withStyles(styles)(SimpleYearColendar)));