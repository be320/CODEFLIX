import React from "react"
import loginImg from "../../login.svg";
import pythonImg from "../../python.png";
import axios from 'axios';
import { Card} from 'react-bootstrap';
import base64 from 'react-native-base64'
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
var Rating = require('react-rating');




export class CourseDashboard extends React.Component{
  
constructor(props)
{
  super(props)
  this.state= {
    courses : [],
    course : {},
    source : null
  }
}

async componentDidMount(){

 const reponse = await axios.get('http://localhost:8080/api/courses')
 const courses = reponse.data
 this.setState({courses: courses })
}



    render(){
      const { courses } = this.state; 
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
<Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}> 
<Card style={{ width: '18rem' , height: '25rem' ,  cursor: "pointer" }}  tag="a" key = {course.id}>
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
</Link>
           )
 }
           </div>
           </div> 
        )
    }
}
