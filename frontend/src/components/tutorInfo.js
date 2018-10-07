import React, {Component} from 'react';
import {connect} from 'react-redux'
import {singleTeacher} from '../actions'

class TutorInfo extends Component {
    state ={

    }


render() {
    // let {teachers} = this.props.teachers
    console.log(this.props.teacher)
    return ( 
        this.props.teacher && 
        <div>
            <div>
                <ul>
                    <div className = "backgroundImageProfile">
                        <li><img style ={{height: 150, width: 150, borderRadius: 35 }} src={this.props.teacher.imgUrl}/></li>
                    </div>
                    <div className = "test">
                    <div className="sidebarInfo">
                        <div className = "textStyleProfile">
                        <li><h3> Name: {this.props.teacher.name} </h3></li>
                        <li><h3> Email: {this.props.teacher.email} </h3></li>
                        <li><h3> Phone Number: {this.props.teacher.phone} </h3></li>
                        <li><h3> Location: {this.props.teacher.location} </h3></li>
                        </div>
                    </div>
                    <div style = {{flex: 4}}>
                        <li><h2> Specialization: {this.props.teacher.specialization} </h2></li>
                        <li><h2> Education Level: {this.props.teacher.educationLevel} </h2></li>
                        <li><h2> Average Hourly Rate: {this.props.teacher.avgHourlyRate} </h2></li>
                        <li><h2> Biography: {this.props.teacher.bio} </h2></li>
                        <li><h2> Education History: {this.props.teacher.educationHistory} </h2></li>
                        <li><h2> Subjects Offered: {this.props.teacher.subjectsOffered} </h2></li>
                        <li><h2> Availability: {this.props.teacher.availability} </h2></li>
                    </div>
                    </div>

                </ul> 
            </div>
        </div>
     );
}
}
const mapStateToProps = state => ({
    teacherID: state.ID,
    teacher: state.teacher
  })

  export default connect(mapStateToProps)(TutorInfo);