import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">
         <button className="switchBtn">Switch to Instructor</button>    
          </div>
        <div className="content">
        <div className="image">
            <img src={loginImg} />
          </div>
        <label className="headLabel">Student Login</label>
          <div className="form">
            <div className="form-group">
              <label >Email</label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
