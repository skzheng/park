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
        <h2 className="animated fadeInUp header-text">Parking made simple.</h2> 
      </div>
    )
  }
}

export default Header;