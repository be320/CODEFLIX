import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export class InstructorData extends React.Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
            <Form color='green' >
                <h1 className="ui centered">Enter Instructor Details</h1>
                <Form.Field>
                    <label>Instructor Name</label>
                    <input
                    placeholder='Name'
                    onChange={this.props.handleChange('name')}
                    defaultValue={values.name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input
                    placeholder='Description'
                    onChange={this.props.handleChange('description')}
                    defaultValue={values.description}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Instructor Image</label>
                      <button className="fileBtn" label='My Label'>
                     <input type="file" accept="image/*" name="imageUrl" onChange={this.props.handleChange('imageUrl')} />
                    </button>
                </Form.Field>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Next</Button>
            </Form>
        )
    }
}

export default InstructorData
