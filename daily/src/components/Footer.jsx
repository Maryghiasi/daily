import React from "react";

import '../style/footerstyle.css';
import { PropTypes } from 'prop-types';





class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
           

    //     }

    // }
    render(){
        return(
            <div className='Footermoney'>
                 <div className="totalmoney"> {this.props.prefix}{'  '}{this.props.jame} </div>
                
            </div>
          

        )

    };
};
Footer.propTypes = {
    jame : PropTypes.string

}
Footer.defaultProps = {
    prefix : 'TOTAL:'

}
export default Footer;