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
        <img id="float-logo" src="/assets/2sdays.svg"/>
        <div className="line"/>
        <h3>The Official Website of 2sdays</h3>

        <div className="social">
          <a href="https://www.facebook.com/2sdaysfn/" target="__blank"><Icon className="social-icons fb" type="facebook"/> </a>
          <a href="https://www.instagram.com/2sdaysfn/" target="__blank"><Icon className="social-icons ig" type="instagram"/></a>
          <a href="https://www.youtube.com/channel/UCsdWZn2EBswMu-Z-UbtiWNQ" target="__blank"><Icon className="social-icons yt" type="youtube" /></a>
        </div>
        <p className="description">A group of amphibious men brought together on the leaf of dance to create, inspire, and share.</p>
        <h3 style={{marginTop: '2%'}}>Coming soon.</h3>
      </div>
    )
  }
}

export default Header;