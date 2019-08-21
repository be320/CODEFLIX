import React from "react"
import ReactCardFlip from 'react-card-flip'
import { Button ,Card , Icon , Image } from 'semantic-ui-react'

export class StudentDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
          };
          this.handleClick = this.handleClick.bind(this);
      }

      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
     

      render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <div key="front">
            <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
        <br/><br/>
        <div className='flip button'>
          <Button basic color='blue' onClick={this.handleClick}>
           More Details
          </Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>
            </div>
     
            <div key="back">
              This is the back of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
          </ReactCardFlip>
          )
        }
}
