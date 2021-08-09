import React from "react";

import AddCircleIcon from "@material-ui/icons/AddCircle";

import { PropTypes } from 'prop-types';

import '../style/dailystyle.css';


class DailyExpenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceInput: '',
            onvanInput: '',
            itemList: [],
            totalp: 0
        };
    };

    handleInput = (event, dastebandi) => {
        //set priceinput and onvaninput
        if (dastebandi === 'gheimat') {
            this.setState({
                priceInput: event.target.value

            })
        } else {
            this.setState({
                onvanInput: event.target.value

            })
        };
    };

    handleAddItems = () => {
        //show list
        console.log(this.state.onvanInput, this.state.priceInput)
        let list = this.state.itemList.concat(
            <div className='additem'>
                <div className="totalexpenses">
                    {this.state.onvanInput}
                </div>
                <div className="totalprice">
                    {this.state.priceInput}
                </div>
            </div>
        )

        this.setState({
            // totalp+pariceinput
            priceInput: '',
            onvanInput: '',
            itemList: list,
            totalp: this.state.totalp + parseInt(this.state.priceInput)
        }, () => {

            this.props.jaaaam(this.state.totalp)
        })


    };

    render() {
        // var
        const {

            titleLabel,
            pricLebel
            //
        } = this.props


        return (
            <div className="dailytotal">
                <div className='inputblock'>
                    <label
                        className='inputLabel'
                        for="title" >
                        {titleLabel}
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="intitle"
                        value={this.state.onvanInput}
                        onChange={(e) => this.handleInput(e, 'onvan')} />
                </div>


                <div className='inputblock'>
                    <label
                        className='inputLabel'
                        for="price">
                        {pricLebel}
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        className="inprice"
                        value={this.state.priceInput}
                        onChange={(e) => this.handleInput(e, 'gheimat')} />

                </div>
                <AddCircleIcon className='icone' onClick={() => this.handleAddItems()} />
                <div className="listblock">
                    {this.state.itemList}
                </div>
            </div>

        )
    };
};

DailyExpenses.propTypes = {


    titleLabel: PropTypes.string,
    pricLebel: PropTypes.string,
    jaaaam: PropTypes.func


};
DailyExpenses.defaultProps = {
    titleLabel: 'TITLE',
    pricLebel: 'PRICE',


};

export default DailyExpenses;
