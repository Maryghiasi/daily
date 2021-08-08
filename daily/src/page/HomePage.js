import React from "react";
import Grid from '@material-ui/core/Grid';
import '../style/style.css';
import Clevcalc from '../components/Clevcalc'
import DailyExpenses from "../components/DailyExpenses";
import Footer from "../components/Footer";


class Homepage extends React.Component {
    render() {
        // var
        // const {
        //     //
        // } = this.props
        return (
                <div className='full-height'>
                    <Grid id='main-grid' container >
                    <Grid className='paper1' item xs={7} >
                        <DailyExpenses/>
                    </Grid>
                    <Grid className='paper2' item xs={5} >
                        <Clevcalc />
                    </Grid>
                </Grid>
                    <Footer jame={this.props.ghjkglk}/>
                </div>
                
                

        )
    };
};

Homepage.propTypes = {

}
Homepage.defaultProps = {}

export default Homepage;