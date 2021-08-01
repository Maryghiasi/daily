import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {PropTypes} from 'prop-types';

import dailystyl from '../style/dailystyle.css';



class DailyExpenses extends React.Component {
    handleClick() {
        console.log('Click happened');
    }
    render() {
        // var
        const {
            buttonLabel,
            titleLabel,
            pricLebel
            //
        } = this.props

        return (
            <Grid item xs={9} >
            <Paper className='paper'>
                <form className='daily' noValidate autoComplete="off">
                    <p>{titleLabel}</p>
                    <TextField id="outlined-basic" label="title" variant="outlined" />
                    <p>{pricLebel}</p>
                    <TextField id="outlined-basic" label="pric" variant="outlined" />
                    <button size="small" color="primary" onClick={() => this.handleClick}>
                        {buttonLabel}
                    </button>
                </form>
            </Paper>
        </Grid>

        )
    };
};

DailyExpenses.propTypes = {

    buttonLabel: PropTypes.string,
    titleLabel: PropTypes.string,
    pricLebel:PropTypes.string


}
DailyExpenses.defaultProps = {
    buttonLabel: 'Add',
    titleLabel:'Title',
    pricLebel:'Pric'

}

export default DailyExpenses;
