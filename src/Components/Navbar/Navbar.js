import React from 'react';
import './Navbar.css';
import { Menu, Icon , Button } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends React.Component {
  state = {
    current: 'home',
    collapsed: true
  }

  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    let mq = window.matchMedia("(min-width:768px)")
    this.setState({collapsed: mq.matches})
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      this.state.collapsed ? 
    (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="navbar"
      >
        <Menu.Item key="home">
          <Icon type="home" />Home
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />About
        </Menu.Item>
        <Menu.Item key="team">
          <Icon type="team" />Team
        </Menu.Item>
        <Menu.Item key="workshops">
          <Icon type="shop" />Workshops
        </Menu.Item>
        <Menu.Item key="contact">
          <Icon type="contacts" />Contact
        </Menu.Item>
      </Menu>
    )
    :
    (
      <Menu 
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="">
          <Icon type="home" />Home
        </Menu.Item>
      </Menu>
    )
  )
  }
}

export default Navbar;