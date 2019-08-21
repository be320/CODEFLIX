import React, { useState } from 'react'
import { Link,Redirect } from 'react-router-dom';
import { Button, List } from 'semantic-ui-react';

const Success = () => {            
          return (
              <div>
              <br/><br/><br/><br/><br/><br/><br/><br/>
                  <div className="App">
                  <div className="tutorialsForm">
                    <div className="container" >
                  <div className="base-container">
                      <div className="content">
                      <label className="headLabel">Congratulations ! Your Playlist is Successfully Uploaded</label>
                      <br/><br/><br/><br/>
      
                   <Link to="/dashboard" >   <Button  className="ui inverted primary button" type="button" >WOW</Button>  </Link>
                  
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
          )

              }


   


export default Success;