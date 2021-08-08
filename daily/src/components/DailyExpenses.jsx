import React from "react";
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import AddCircleIcon from "@material-ui/icons/AddCircle";


import { PropTypes } from 'prop-types';
import Footer from '../components/Footer';
import '../style/dailystyle.css';


class DailyExpenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceInput: '',
            onvanInput: '',
            itemList : [],
            totalp : 0
        }
    }

    handleInput = (event, dastebandi) => {
        if (dastebandi == 'gheimat') {
            this.setState({
                priceInput: event.target.value
            }, () => {
                console.log(this.state.priceInput)
            })
        } else {
            this.setState({
                onvanInput: event.target.value
            }, () => {
                console.log(this.state.onvanInput)
            })
        }
    }

    handleAddItems = () => {
        console.log(this.state.onvanInput , this.state.priceInput)
        let list = this.state.itemList.concat(
            <div>
                <div className="totalexpenses"> 
                    {this.state.onvanInput} 
                    
                </div>
                <div className="totalprice"> 
                    {this.state.priceInput} 
                </div>
            </div>
            )

        
        this.setState({
            priceInput: '',
            onvanInput: '',
            itemList : list,
            totalp : this.state.totalp + parseInt(this.state.priceInput)
        },()=>{
            console.log(this.state.itemList)
        })

    }

    render() {
        // var
        const {

            titleLabel,
            pricLebel 
            //
        } = this.props


        return (
            <div className="dailytotal">

                <label for="title" >{titleLabel}</label><br></br>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="intitle"
                    value={this.state.onvanInput}
                    onChange={(e) => this.handleInput(e, 'onvan')} />
                    

                <label for="price">{pricLebel}</label>
                
                <input
                    type="number"
                    id="price"
                    name="price"
                    className="inprice"
                    value={this.state.priceInput}
                    onChange={(e) => this.handleInput(e, 'gheimat')} />

               
                <AddCircleIcon  onClick={() => this.handleAddItems()} color='danger' />
                <div className="listblock">
                {this.state.itemList}
                </div>
            
                 {/* <div className="totalmoney">{this.state.totalp}</div> */}
              
            </div>
        
           
           


        )
    };
};

DailyExpenses.propTypes = {

    buttonLabel: PropTypes.string,
    titleLabel: PropTypes.string,
    pricLebel: PropTypes.string,
    deleteLable: PropTypes.string


}
DailyExpenses.defaultProps = {
    buttonLabel: 'Add',
    titleLabel: 'Title',
    pricLebel: 'Pric',
   

}

export default DailyExpenses;
