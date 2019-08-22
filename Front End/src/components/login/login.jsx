import React from "react";
import loginImg from "../../login.svg";
import axios from 'axios';
import {Link , Redirect} from 'react-router-dom';
import { bool } from "prop-types";
var md5 = require('md5');

export class Login extends React.Component {
  

  state = {
    name: '',
    email: '',
    password: '',
    gender: '',
    birthDate: new Date(),
    imageUrl: '',
    redirectToReferrer: false
  }

  handleChangeEmail = event => {
    this.setState(
      { email: event.target.value,  });
  }
  handleChangePassword = event => {
    this.setState(
      { password: md5(event.target.value)  });
  }

  handleSubmit = async event => {
    event.preventDefault();

  
    var student = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      birthDate: this.state.birthDate,
      imageUrl: this.state.imageUrl
    };
   
 axios.post('http://localhost:8080/api/login' ,student)
   .then(response =>{
    console.log(response)
    if(response.data == true){
      this.setState({ redirectToReferrer: true })
    }
   })
   .catch(error => {
    console.log(error)
   })
    
  }


  render() {

    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
    
      return (
        <Redirect to="/dashboard" />
      )
    }

    return (
      <form onSubmit={this.handleSubmit}>
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
              <input type="email" name="email" placeholder="email"  onChange={this.handleChangeEmail}/>
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleChangePassword} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </div>
      </form>
    );
  }
}
