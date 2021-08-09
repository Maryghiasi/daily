import React from "react";

import { PropTypes } from 'prop-types';

import '../style/footerstyle.css';



class Footer extends React.Component {
    render(){
        return(
            //show total
            <div className='Footermoney'>
                 <div className="totalmoney"> {this.props.prefix}{'  '}{this.props.jame} </div>
                
            </div>
        )

    };
};
Footer.propTypes = {
    jame : PropTypes.string

};
Footer.defaultProps = {
    prefix : 'TOTAL:'

};
export default Footer;