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
                    <div className = "mainContent">
                    <div className="sidebarInfo">
                        <div className = "textStyleProfile">
                        <li><h3> Name: {this.props.teacher.name} </h3></li>
                        <li><h3> Email: {this.props.teacher.email} </h3></li>
                        <li><h3> Phone Number: {this.props.teacher.phone} </h3></li>
                        <li><h3> Location: {this.props.teacher.location} </h3></li>
                        </div>
                    </div>
                    <div style = {{flex: 4, fontSize: 5}}>
                        <li><h2> Specialization: {this.props.teacher.specialization} </h2></li>
                        <li><h2> Education Level: {this.props.teacher.educationLevel} </h2></li>
                        <li><h2> Subjects Offered: {this.props.teacher.subjectsOffered} </h2></li>
                        <li><h2> Average Hourly Rate: {this.props.teacher.avgHourlyRate} </h2></li>
                        <li><h2> Biography: {this.props.teacher.bio} </h2></li>
                        <li><h2> Education History: {this.props.teacher.educationHistory} </h2></li>
                        <li><h2> Availability: {this.props.teacher.availability} </h2></li>
                    </div>
                    </div>
                </ul> 
            </div>
                    <div className="Information" style = {{backgroundColor: "#936A4A", color: "#D5A253", marginTop: -20}}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h2 id="contact" style={{ flex: 1, marginBottom: 5, marginTop: 25 }}>Contact Us</h2>
                        <div>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-facebook-square fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-twitter fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-flickr fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-instagram fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-tumblr fa-2x"></i></button>
                        </div>
                    <h6 style = {{fontFamily:'Open Sans Condensed', marginTop: 5 }}>Email us at:<a style = {{marginLeft: 5, color: "#D5A253"}} href = "" target="_top">Tutor_ToGo@Gmail.com</a></h6>
                    <h6 style = {{fontFamily:'Open Sans Condensed', marginTop: 5  }}>For More Information Call us at:  <a style = {{marginLeft: 5, color: "#D5A253"}} href = "" target="_top">(714) 714-7147</a></h6>
                    </div>
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
