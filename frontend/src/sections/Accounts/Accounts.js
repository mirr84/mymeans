import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";
import SimpleTable, {createData} from "../../components/table/SimpleTable";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";

const methods = {
    componentDidMount(props) {
         props.dispatch.setter('menuReducer', {loader: false});
    }
}

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
]

const Accounts = ({state, dispatch, classes}) => {
    return (
        <div className={classes.root}>

            <Typography variant="h4" gutterBottom component="h2">
                Счета
            </Typography>

            <ExpansionPanel defaultExpanded>

                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Ваши счета</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <SimpleTable data={data} />
                </ExpansionPanelDetails>

            </ExpansionPanel>

            <ExpansionPanel defaultExpanded>

                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Счета коорые использовались</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <SimpleTable data={data} />
                </ExpansionPanelDetails>

            </ExpansionPanel>

        </div>
    )
}

Accounts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connector(lifecycle(methods)(withStyles(styles)(Accounts)));