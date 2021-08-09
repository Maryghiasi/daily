import React from "react";

import Grid from '@material-ui/core/Grid';
import Clevcalc from '../components/Clevcalc'
import DailyExpenses from "../components/DailyExpenses";
import Footer from "../components/Footer";

import '../style/style.css';


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totall : 0
        }
    }


    handleTotal =(meghdar)=>{
        this.setState({
            totall : meghdar
        })
    }
    render() {
        // var
        // const {
        //     //
        // } = this.props
        return (
                <div className='full-height'>
                    <Grid id='main-grid' container >
                    <Grid className='paper1' item xs={7} >
                        <DailyExpenses jaaaam={(meghdar)=>this.handleTotal(meghdar)} />
                    </Grid>
                    <Grid className='paper2' item xs={5} >
                        <Clevcalc />
                    </Grid>
                </Grid>
                    <Footer jame={this.state.totall}  />
                </div>
                

        )
    };
};

Homepage.propTypes = {

}
Homepage.defaultProps = {}

export default Homepage;