import React, { Component , useState } from 'react';
import { Button, List } from 'semantic-ui-react';
import axios from 'axios';
import { Link ,Redirect } from 'react-router-dom';

//const Confirmation =(props) => {

export class Confirmation extends React.Component{

    constructor(props){
        super(props);
        const { values: { title, courseDescription, courseImageUrl, price, category, instructorID, tutorials} } = props;
        
        this.state={
          title: title,
          courseDescription: courseDescription,
          courseImageUrl: courseImageUrl,
          price: price,
          category: category,
          instructorID: instructorID,
          tutorials: tutorials,
          image : {},
          course: {},
          dbTutorials: [],
          redirectToReferrer: false
        }
    }

async componentDidMount(){

 const response = await axios.get('http://localhost:8080/api/downloadFiles')
 const last = response.data.length
 const image = response.data[last-1]
 this.setState({image: image})
 this.setState({courseImageUrl: image.id})


 const {tutorials } =this.state

       
       for(var i=0; i<tutorials.length;i++){

        var tutorial = {
            title: tutorials[i]['title'],
            videoUrl: tutorials[i]['url'],
        };

        this.state.dbTutorials.push(tutorial)


        axios.post('http://localhost:8080/api/tutorials' ,tutorial)
       .then(response =>{
        console.log(response)
       })
       .catch(error => {
        console.log(error)
       })

       }

}




    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }


    

    handleSubmit = async event => {
        event.preventDefault();

        console.log('My Image')
        console.log(this.state.image)


        var course = {
            title: this.state.title,
            description: this.state.courseDescription,
            imageUrl: this.state.image,
            price: this.state.price,
            category: this.state.category,
            instructorId: this.state.instructorID,
            tutorials: this.state.dbTutorials
          };
        

         
         axios.post('http://localhost:8080/api/courses' ,course)
         .then(response =>{
          console.log(response)
         })
         .catch(error => {
          console.log(error)
         })

         this.setState({ redirectToReferrer: true })
       
      }
    

     render(){
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return (
              <Redirect to="/success" />
            )
        }
        else{
        return(
            <form onSubmit={this.handleSubmit}>
<br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="App">
            <div className="tutorialsForm">
              <div className="container" ref={ref => (this.container = ref)}>
            <div className="base-container" ref={this.props.containerRef} >
                <div className="content">
                <label className="headLabel">Are You Sure You want to upload this course ? </label>
                <br/><br/><br/><br/>
                <div className="tutorials">
                <Button  className="ui inverted orange button" onClick={this.back}>Back</Button>
                <Button  className="ui inverted primary button" type="submit" >Confirm</Button>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </form>
        )
     }
    }
}

export default Confirmation;