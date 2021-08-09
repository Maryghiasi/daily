import React from "react";

import '../style/style.css';
import '../style/clevstyle.css';



class Clevcalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstValue: '0',
            secondValue: '0',
            multiOperator: false,
            sumOperator: false,
            menhaOperator: false,
            total: 0,
            menha: 0

        }

    }

    handleClick = (num) => {
        if (typeof (num) == 'number') {

            if (this.state.menhaOperator == true | this.state.sumOperator == true | this.state.multiOperator == true) {
                // check if - clicked
                // set second Value
                if (this.state.total == 0) {
                    this.setState({
                        secondValue: this.state.secondValue + String(num)
                    })
                } else {
                    this.setState({
                        firstValue: this.state.total,
                        secondValue: '0',
                        total: 0
                    }, () => {
                        this.setState({
                            secondValue: this.state.secondValue + String(num)
                        })
                    })

                }
            } else if (this.state.total == 0) {
                this.setState({
                    firstValue: this.state.firstValue + String(num)
                }, () => {
                    console.log(this.state.firstValue)
                })


            } else {
                this.setState({
                    total: 0
                }, () => {
                    this.setState({
                        firstValue: this.state.firstValue + String(num)
                    })
                })
            }

        } else if (num == '-') {
            // - is clicked now
            this.setState({
                menhaOperator: true,
                sumOperator: false,
                multiOperator: false
            })

        } else if (num == '+') {
            // + is clicked now
            this.setState({
                sumOperator: true,
                menhaOperator: false,
                multiOperator: false
            })

        } else if (num == '*') {
            // * is clicked now
            this.setState({
                sumOperator: false,
                menhaOperator: false,
                multiOperator: true
            })

        } else if (num == '=') {
            console.log(this.state.firstValue, this.state.secondValue)
            if (this.state.sumOperator == true) {
                // F+S
                let totalNumber = parseInt(this.state.firstValue) + parseInt(this.state.secondValue)
                this.setState({
                    total: totalNumber
                })

            } else if (this.state.menhaOperator == true) {
                // F-S
                let totalNumber = parseInt(this.state.firstValue) - parseInt(this.state.secondValue)
                this.setState({
                    total: totalNumber
                })
            } else if (this.state.multiOperator == true) {
                // F*S
                let totalNumber = parseInt(this.state.firstValue) * parseInt(this.state.secondValue)
                this.setState({
                    total: totalNumber
                })
            }

            this.setState({
                menhaOperator: false,
                sumOperator: false,
                multiOperator: false,
                firstValue: '0',
                secondValue: '0',
            })



        } else if (num == 'Clear') {
             // clear is clicked now
            this.setState({
                firstValue: '0',
                secondValue: '0',
                sumOperator: false,
                menhaOperator: false,
                multiOperator: false,
                total: 0,
                menha: 0
            })
        }
    }

    render() {
        // // var
        // const {

        // } = this.props

        return (
            <div className="container calc-base">
                <div className=" totalvalue">
                    {this.state.firstValue == 0 ? '' : this.state.firstValue}
                    <br></br>
                    {this.state.sumOperator == true ? '+' : ''}
                    {this.state.menhaOperator == true ? '-' : ''}
                    {this.state.multiOperator == true ? '×' : ''}
                    <br></br>
                    {this.state.secondValue == 0 ? '': this.state.secondValue} <br></br>
                     {this.state.total}
                </div>
                
                <div className="row">
                    <div className="col-lg-9"><button onClick={()=>this.handleClick('Clear')} id='main-row'>clear</button></div>
                    <div className="col-lg-3 "><button  className='operator'>%</button></div>

                </div>
                <div className="row">
                    <div className="col-lg-3 "><button onClick={() => this.handleClick(7)} className='numeric'>7</button></div>
                    <div className="col-lg-3 "><button onClick={() => this.handleClick(8)} className='numeric'>8</button></div>
                    <div className="col-lg-3 "><button onClick={() => this.handleClick(9)} className='numeric'>9</button></div>
                    <div className="col-lg-3 "><button onClick={() => this.handleClick('-')} className='operator'>-</button></div>
                </div>
                <div className="row">
                    <div className="col-lg-3 "><button onClick={() => this.handleClick(4)}className='numeric'>4</button></div>
                    <div className="col-lg-3 "><button onClick={() => this.handleClick(5)} className='numeric'>5</button></div>
                    <div className="col-lg-3 "><button onClick={() => this.handleClick(6)} className='numeric'>6</button></div>
                    <div className="col-lg-3 "><button onClick={() => this.handleClick('+')} className='operator'>+</button></div>
                </div>
                <div className="row">
                    <div className="col-lg-3 "><button onClick={() => this.handleClick(1)}className='numeric'>1</button></div>
                    <div className="col-lg-3 "><button onClick={() => this.handleClick(2)} className='numeric'>2</button></div>
                    <div className="col-lg-3 "><button onClick={() => this.handleClick(3)} className='numeric'>3</button></div>
                    <div className="col-lg-3 "><button onClick={() => this.handleClick('*')}className='operator'>*</button></div>
                </div>
                <div className="row">
                <div className="col-lg-3 "><button onClick={() => this.handleClick(0)} className='numeric'>0</button></div>
                    <div className="col-lg-3 "><button onClick={() => this.handleClick('.')} className='numeric'>.</button></div>
                    <div className="col-lg-6 "><button id='main-row' onClick={() => this.handleClick('=')} className='operator'>=</button></div>
                </div>

            </div>



        )
    };
};


export default Clevcalc;



