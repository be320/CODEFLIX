import React, { Component } from 'react';
import CourseData from './courseData';
import InstructorData from './instructorData';
import TutorialsData from './tutorialsData';
import Confirmation from './confirmation';
import { FileService } from '../../FileManager/FileService';

export class MainForm extends Component {

    constructor(props){
        super(props)
        this.fileService = new FileService();
    }

    state = {
        step: 1,
        title: '',
        courseDescription: '',
        courseImageUrl: null,
        price: '',
        category: '',
        instructorID: '',
        tutorials:[
            {
                id:0,
                title:'',
                url:''
            }
        ]
    }

    tutorialsCallback = (tutFromChild) => {

        this.setState({tutorials: tutFromChild})

    }

    nextStep = () => {
         const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    handleFile = (event) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];
       this.setState({courseImageUrl: file})
        console.log("Uploading file", event.target.files[0]);
        data.append('file', event.target.files[0]);
        data.append('name', 'my_file');
        data.append('description', 'this file is uploaded by young padawan');
        let self = this;
        //calling async Promise and handling response or error situation
        this.fileService.uploadFileToServer(data).then((response) => {
            console.log("File " + file.name + " is uploaded");
        }).catch(function (error) {
            console.log(error);
            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=",error.response.status);
            } else {
                //some other error happened
               console.log("Upload error. HTTP error/status code=",error.message);
            }
        });
    };
    render(){
        const {step} = this.state;
        const { title, courseDescription, courseImageUrl, price, category, instructorID, tutorials} = this.state;
        const values = {  title, courseDescription, courseImageUrl, price, category, instructorID, tutorials };
        console.log('step :', step);
        switch(step) {
        case 1:
            
            return <CourseData 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    handleFile = {this.handleFile}
                    />

        case 2:
            return <TutorialsData 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    callbackFromParent={this.tutorialsCallback}
                    />
        case 3:
            return <Confirmation
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    
                    
                    />            
      default:
          return <h1>Wrong Page</h1>
        }
    }
}

export default MainForm