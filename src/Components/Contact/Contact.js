import React from 'react';
import { Icon } from 'antd';
import './Contact.css';

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div className="contact">
          <h1 className="contact-title">Contact Us</h1>
          <form >
            <input className="form-input" type="text" name="FirstName" placeholder="Name"/><br/>
            <input className="form-input"type="text" name="LastName" placeholder="Email"/><br/>
            <textarea className="form-input" type="textarea" name="LastName" placeholder="Message"/><br/>
            <div className="button">
              <p className="button-text">SUBMIT</p>
            </div>
          </form>
      </div>
    )
  }
}

export default Contact;