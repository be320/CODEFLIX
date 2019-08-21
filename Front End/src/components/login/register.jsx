import React from "react";
import loginImg from "../../login.svg";
import axios from 'axios';
import DatePicker from 'react-date-picker';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link , Redirect} from 'react-router-dom';
var md5 = require('md5');

export class Register extends React.Component {

  
    state = {
      name: '',
      email: '',
      password: '',
      gender: '',
      birthDate: new Date(),
      imageUrl: '',
      redirectToReferrer: false
    }
   
   
    onFileLoad = (e, file) => console.log(e.target.result, file.name);
  
  handleChangeName = event => {
    this.setState(
      { name: event.target.value, });
  }
  handleChangeEmail = event => {
    this.setState(
      { email: event.target.value,  });
  }
  handleChangePassword = event => {
    this.setState(
      { password: md5(event.target.value)  });
  }
  handleChangeGender = event => {
    this.setState(
      {     gender: event.target.value,      });
  }
  handleChangeImageUrl = event => {
    this.setState(
      { 
        imageUrl: event.target.value,     });
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
   
   axios.post('http://localhost:8080/api/students' ,student)
   .then(response =>{
    console.log(response)
   })
   .catch(error => {
    console.log(error)
   })

    this.setState({ redirectToReferrer: true })
  
    
  }

  onChange = date => this.setState({ date })


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

        </div>
        <div className="content">
        <div className="image">
        <img src={loginImg} />
        
          </div>
        <label className = "headLabel">Student Register</label>
         
          <div className="form">
         
            <div className="form-group">
              <label >Name</label>
              <input type="text" name="name" placeholder="name" onChange={this.handleChangeName} />
            </div>
            <div className="form-group">
              <label >Email</label>
              <input type="email" name="email" placeholder="email" onChange={this.handleChangeEmail}/>
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleChangePassword} />
            </div>
            <div className="gender">
            <label className="title" >Gender</label>
        <RadioGroup 
          aria-label="gender"
          name="gender"
          // className={classes.group}
          // value={value}
          onChange={this.handleChangeGender}
        row >
          <FormControlLabel value="male" control={<Radio />} label="Male" className="radio"/>
          <FormControlLabel value="female" control={<Radio />} label="Female" className="radio"/>
        </RadioGroup>
        </div>
            <div className="calender">
            <label >Birth Date</label>
            <DatePicker name="birthDate"
          onChange={this.onChange}
          value={this.state.date}
        />
            </div>
            <div className="uploadImage">
            <label >Profile Image</label>
            <button className="fileBtn"
   label='My Label'>
   <input type="file" accept="image/*" name="imageUrl" onChange={this.handleChangeImageUrl} />
</button>
</div>


 <button  type="submit" className="btn" > Register </button> 

          </div>  
        </div>
        <div className="footer">
         
        </div>
      </div>
      </form>
    );
  }
}


