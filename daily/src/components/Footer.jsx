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
                 <div className="totalmoney">{this.props.jame} {'  '}  {this.props.prefix}</div>
                
            </div>
          

        )

    };
};
Footer.propTypes = {
    jame : PropTypes.string

}
Footer.defaultProps = {
    prefix : 'toman'

}
export default Footer;