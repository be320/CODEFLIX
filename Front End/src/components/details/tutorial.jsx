import React, { Fragment, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { List } from 'semantic-ui-react'
import axios from 'axios';




const Tutorial = (props) =>{
  const { match: { params } } =props;
  const[courseId, setCourseId] =useState(0)
  const[tutorials, setTutorials] =useState([])
  const[loading, setLoading] =useState(true)
  const[videoURL, setVideoURL] =useState("")
 
  const opts = {
    height: '500',
    width: '1000',
    // https://developers.google.com/youtube/player_parameters
    playerVars: {
      autoplay: 0,
      origin: 0
    }

}

  


useEffect(() =>{
  const fetchData = async() =>{
  const fetchedTutorials =await axios.get(`http://localhost:8080/api/courses/${params.id}/tutorials`);
  
    setTutorials(fetchedTutorials)
    setVideoURL(fetchedTutorials.data[0]['videoUrl'])
  }
  fetchData() 
   
  
 
}, [] )



 const RenderTutorials = () => {

 const changeVideo = (url) =>{
   console.log(url)
  setVideoURL(url)
 }


  if(tutorials.length===0){
   
return(
    <h1>Loading</h1>
)
  } 
  else{
    const tuts=tutorials.data
    

    
    return (
      <div className="youtube">
      <YouTube className="videoList"
      videoId={videoURL}
      opts={opts}
      
    />
      <List divided relaxed className="videoList" width='600'>
        
      <h1>Playlist Content</h1>
       {
         
              tuts.map( (tutorial,index) =>    
              (     
        <List.Item  key = {tutorial['id']} onClick={()=> {changeVideo(tutorial['videoUrl'])}}>
          <List.Icon name='play circle' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>{index+1}.{tutorial['title']}</List.Header>
            <List.Description as='a'>4 mins</List.Description>
          </List.Content>
        </List.Item>
               ))
      }
      </List>
</div>
    )
  }
} 
 

    return (
      
      <RenderTutorials /> 
    
    )


}
export default Tutorial