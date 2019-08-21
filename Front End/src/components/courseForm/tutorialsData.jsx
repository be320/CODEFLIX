import React from 'react';
import { Button } from 'semantic-ui-react';
import  "../../App.scss"
export class TutorialsData extends React.Component{

    constructor(props) {
        super(props);
        this.addTutorial = this.addTutorial.bind(this);
        this.dropTutorial = this.dropTutorial.bind(this);
        this.saveAndContinue = this.saveAndContinue.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeUrl = this.handleChangeUrl.bind(this);
        this.state = {
            counter: 0,
            add: false,
            tutorials: [],
            tutID: 1
        }
        
    
      }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.callbackFromParent(this.state.tutorials)
        this.props.nextStep()
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }


  dropTutorial =  index =>{  

    console.log(index)

        let newTutorials =  this.state.tutorials.filter((e,i) => 
        
        i !== index);

     
         this.setState({
              tutorials: newTutorials,
              counter:this.state.counter-1
          })

        
        

    }


    addTutorial = async() => {

      await this.setState({
          add: true,
     
        });

        let newTutorials = this.state.tutorials
        newTutorials.push(
            {
                id: this.state.tutID,
                title : ' ',
                url: ' '
            }
        
        )   
        this.setState({
            tutorials: newTutorials ,
            counter: this.state.counter +1,
            tutID: this.state.tutID +1
        })

    
      }

       handleChangeTitle = index  => event =>  {
        let newTutorials =  this.state.tutorials
        newTutorials[index].title = event.target.value
        this.setState({tutorials: newTutorials})
      }

      handleChangeUrl = index => event => {
        let newTutorials =this.state.tutorials
        newTutorials[index].url = event.target.value
        this.setState({tutorials: newTutorials})
      }

     render(){
       return(
            <div className="App">
            <div className="tutorialsForm">
              <div className="container" ref={ref => (this.container = ref)}>
            <form >
            <div className="base-container" ref={this.props.containerRef} >
                <div className="content">
                <label className="headLabel">Enter Tutorials Details</label>
                <div className="form">
            
            
            <Button className="ui inverted green button"  type="button" onClick={this.addTutorial}>+</Button>
            <br/>
              
                { this.state.add &&
   this.state.tutorials.map((tutorial,index) => 
            (
                <div key = {tutorial.id}>
                <div className="tutorials">
    
       <label className="tutNumber">{index+1}.</label>
       <input  className="videoTitle" placeholder='Video Title' onChange={this.handleChangeTitle(index)} />
       <input  className="videoId"  placeholder='Youtube ID (11 CH)' onChange={this.handleChangeUrl(index)} />
       <Button className="ui inverted red button" type="button" onClick={() => this.dropTutorial(index)} >-</Button>
      
       </div>
       <br/>
   </div>
            )
        )
                }
            

             <div className='tutBottom'>
                <Button className="ui inverted orange button" onClick={this.back}>Back</Button>
                <Button className="ui inverted primary button"  onClick={this.saveAndContinue}>Next</Button>
                </div>
                </div>
                </div>
                </div>
            </form>
            </div>
            </div>
            </div>
        )
    }
}

export default TutorialsData


