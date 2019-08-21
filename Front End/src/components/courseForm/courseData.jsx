import React from 'react';
import {Button}  from 'semantic-ui-react';
import  "../../App.scss"
import { width } from '@material-ui/system';

export class CourseData extends React.Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    

    render(){
        const { values } = this.props;
        return(
            <div className="App">
            <div className="login">
              <div className="container" ref={ref => (this.container = ref)}>
            <form >
            <div className="base-container" ref={this.props.containerRef} >
                <div className="content">
                <label className="headLabel">Enter Course Details</label>
                <div className="form">
                <div className="form-group">
                    <label>Course Title</label>
                    <input
                    placeholder='Title'
                    onChange={this.props.handleChange('title')}
                    defaultValue={values.title}
                    />
                    </div>
                    <div className="form-group">
                    <label>Description</label>
                    <input
                    placeholder='Description'
                    onChange={this.props.handleChange('courseDescription')}
                    defaultValue={values.courseDescription}
                    />
                    </div>
                    <div className="form-group">
                    <label>Price</label>
                    <input
                    placeholder='Price in $'
                    onChange={this.props.handleChange('price')}
                    defaultValue={values.price}
                    />
                    </div>
                    <div className="form-group">
                    <label>Instructor ID</label>
                    <input
                    placeholder='Instructor ID'
                    onChange={this.props.handleChange('instructorID')}
                    defaultValue={values.instructorID}
                    />
                     </div>
                     <div className="form-group">
                    <label>Category</label>
                    <input
                    placeholder='Category'
                    onChange={this.props.handleChange('category')}
                    defaultValue={values.category}
                    />
                    </div>
                    <div className="uploadImage">
                    <label>Course Logo</label>
                      <button className="fileBtn" label='My Label'>
                     <input type="file" accept="image/*" name="courseImageUrl" onChange={this.props.handleFile} />

                    </button>
                    </div>
                <Button style={{width: '80%' }} className="ui inverted primary button" onClick={this.saveAndContinue} >Next</Button>
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

export default CourseData
