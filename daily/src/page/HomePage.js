import React from "react";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import DailyExpenses from "../components/DailyExpenses";



class Homepage extends React.Component {
    render() {
        // var
        const {
            //
        } = this.props
        return (

            <div className='root'>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className='paper'>xs=12</Paper>
                    </Grid>
                    <Grid item xs={9} >
                        <DailyExpenses/>
                    </Grid>
                    <Grid item xs={3} >
                        <Paper className='paper'>andaz3</Paper>
                    </Grid>
                </Grid>
            </div>

        )
    };
};

Homepage.propTypes = {

}
Homepage.defaultProps = {}

export default Homepage;