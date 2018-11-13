import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

const methods = {
    componentDidMount(props) {
    }
}

const styles = {
    table: {
        minWidth: 700,
    },
};

let id = 0;
export const createData = (name, calories, fat, carbs, protein) => {
    id += 1;
    return {id, name, calories, fat, carbs, protein};
}

const SimpleTable = ({state, dispatch, classes, data}) =>
    <Table className={classes.table}>
        <TableHead>
            <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell numeric>Calories</TableCell>
                <TableCell numeric>Fat (g)</TableCell>
                <TableCell numeric>Carbs (g)</TableCell>
                <TableCell numeric>Protein (g)</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map(n => {
                return (
                    <TableRow key={n.id}>
                        <TableCell component="th" scope="row">
                            {n.name}
                        </TableCell>
                        <TableCell numeric>{n.calories}</TableCell>
                        <TableCell numeric>{n.fat}</TableCell>
                        <TableCell numeric>{n.carbs}</TableCell>
                        <TableCell numeric>{n.protein}</TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    </Table>


SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connector(lifecycle(methods)(withStyles(styles)(SimpleTable)));