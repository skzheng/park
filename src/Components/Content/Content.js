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
        <div className="user-host">
        <div className="user" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true">
          <div className="content-logo">
            <i className="fas fa-street-view"></i>
          </div>
            <h1>Users</h1>
            <Steps direction="vertical" current={-1}>
              <Step title="EASY ACCESS" description="Park in convenient locations" />
              <Step title="SAVE MONEY" description="Save thousands on tickets" />
              <Step title="PLAN AHEAD" description="Reserve spaces in advance" />
            </Steps>
        </div>
        <div className="line" />
        <div className="host" data-aos="fade-left" data-aos-duration="3000" data-aos-once="true">
          <div className="content-logo">
            <i className="far fa-building"></i>
          </div>
            <h1>Hosts</h1>
            <Steps direction="vertical" current={-1}>
                <Step title="Simple set up" description="Host a spot quickly" />
                <Step title="Earn Money" description="Generate passive income" />
                <Step title="Waiting" description="This is a description." />
              </Steps>
        </div>
        </div>
      </div>
    )
  }
}

export default Content;