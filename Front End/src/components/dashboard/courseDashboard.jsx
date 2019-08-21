import React from "react"
import loginImg from "../../login.svg";
import pythonImg from "../../python.png";
import axios from 'axios';
import { Card} from 'react-bootstrap';
import base64 from 'react-native-base64'
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Button } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
var Rating = require('react-rating');




export class CourseDashboard extends React.Component{
  
constructor(props)
{
  super(props)
  this.state= {
    courses : [],
    course : {},
    source : null,
    paramId: 119,
    redirectToReferrer: false
  }
  this.showDetails = this.showDetails.bind(this)
}

async componentDidMount(){

 const reponse = await axios.get('http://localhost:8080/api/courses')
 const courses = reponse.data
 this.setState({courses: courses })
}

showDetails = id => {

  this.setState({ 
  redirectToReferrer: true ,
  paramId: id })
}


    render(){
      const { courses , redirectToReferrer ,paramId } = this.state; 

      if(redirectToReferrer)
      {
      
        return (
          <Redirect to={`/course/${paramId}` } />
        )
      }
      else{
        return( 
<div className="dashboard">
<div className= "courses">
<div className = "search">
<MuiThemeProvider>

  <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        marginTop: 50,
        maxWidth: 800,
        marginLeft: 100,
      }}
      
    />
</MuiThemeProvider>
</div>
<Link to="/form">  <Button className="ui inverted purple button"  type="button" >Create Playlist</Button></Link>
</div>
<div className= "courses">
  {
           courses.map( course =>   

<Card style={{ width: '18rem' , minWidth: '18rem' , height: '25rem' ,  cursor: "pointer" , textDecoration: 'none' }}  key = {course.id}  tag="a" onClick={()=> this.showDetails(course.id)}>
 <Card.Img  style={{ width: '100%' , height: '50%'}} variant="top" src={'data:image/*;base64, '+course.imageUrl.data }/>
 <Card.Body className="card-body">
   <Card.Title>{course.title}</Card.Title>
   <Card.Text>
   {course.description}
   </Card.Text>
 </Card.Body>
 <Card.Footer>
  
 </Card.Footer>
</Card>
           )
 }
           </div>
           </div> 
        )
}
    }
}
