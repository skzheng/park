import React from 'react';
import { Icon, Steps } from 'antd';
import './Content.css';

const Step = Steps.Step;

class Content extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div className="content">
        {/* <h1></h1> */}
        <div className="user-section">
        <div className="user" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true">
          <div className="content-logo">
            <i className="fas fa-street-view"></i>
          </div>
            <h1 style={{fontWeight: '800'}}>USERS</h1>
            <Steps direction="vertical" current={-1}>
              <Step title="Choose" description="Pick an open location" />
              <Step title="Confirm" description="Enter your make and model" />
              <Step title="Submit" description="Pay and receive confirmation" />
            </Steps>
            <div className="button">
              <p className="button-text">GET STARTED</p>
              <i class="fas fa-arrow-right"></i>
            </div>
        </div>
        <div className="line" />
        <div className="user-benefits">
          <div className="card" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true" >
            <i class="fas fa-check card-icon"></i>
            <div className="card-content">
              <h2 className="card-title">EASY ACCESS</h2>
              <p className="card-text">Spend less time finding parking.</p>
            </div>
          </div>
          <div className="card" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500" data-aos-once="true">
            <i className="far fa-money-bill-alt card-icon"></i>
            <div className="card-content">
              <h2 className="card-title">SAVE MONEY</h2>
              <p className="card-text">Save hundreds on tickets and fines.</p>
            </div>
          </div>
          <div className="card" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000" data-aos-once="true">
            <i class="far fa-calendar-alt card-icon"></i>
            <div className="card-content">
              <h2 className="card-title">PLAN AHEAD</h2>
              <p className="card-text">Reserve spaces in advance.</p>
            </div>
          </div> 
        </div>
        </div>

        {/* <div className="divider"/> */}

        <div className="host-section">
        <div className="user-benefits">
          <div className="card" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true" >
            <i class="fas fa-fast-forward card-icon"></i>
            <div className="card-content">
              <h2 className="card-title">SIMPLE SET UP</h2>
              <p className="card-text">Get started in less than 10 minutes</p>
            </div>
          </div>
          <div className="card" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500" data-aos-once="true">
            <i class="fas fa-hand-holding-usd card-icon"></i>
            <div className="card-content">
              <h2 className="card-title">EARN MONEY</h2>
              <p className="card-text">Generate passive income easily</p>
            </div>
          </div>
          <div className="card" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000" data-aos-once="true">
          <i class="fas fa-lock card-icon"></i>
            <div className="card-content">
              <h2 className="card-title">STAY SECURE</h2>
              <p className="card-text">PWM parking sensors keep you safe</p>
            </div>
          </div> 
        </div>
        <div className="line" />
        <div className="host"  data-aos="fade-left" data-aos-duration="3000" data-aos-once="true">
          <div className="content-logo">
            <i className="far fa-building"></i>
          </div>
            <h1 style={{fontWeight: '800'}}>HOSTS</h1>
            <Steps direction="vertical" current={-1}>
                <Step title="Register" description="Create an account" />
                <Step title="Host" description="Add open parking locations" />
                <Step title="Accept" description="Confirm parking requests" />
              </Steps>
            <div className="button">
              <p className="button-text">GET STARTED</p>
              <i class="fas fa-arrow-right"></i>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Content;