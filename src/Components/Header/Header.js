import React from 'react';
import { Icon } from 'antd';
import './Header.css';

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div className="header">
          <h2 className="animated fadeInUp header-text">Parking on demand.</h2> 
          <p className="animated fadeIn header-description">Book and list unused space in your area now</p>
          <p className="animated fadeIn learn-more">Learn more</p>
        <img className="header-image animated fadeIn" src="/assets/pwmmock.png"/>
      </div>
    )
  }
}

export default Header;