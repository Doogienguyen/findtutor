import React, {Component} from 'react';
import {connect} from 'react-redux'


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
                        <li><img style ={{height: 160, width: 160, borderRadius: 35 }} src={this.props.teacher.imgUrl} alt="Teacher Photo"/></li>
                    </div>
                    <div className = "mainContent">
                    <div className="sidebarInfo">
                        <div className = "textStyleProfile">
                        <li><h4><img className="sideBarIcon" src={"https://embodiedfacilitator.com/wp-content/uploads/2018/05/human-icon-png-1901.png"} alt="name icon"/>{this.props.teacher.name} </h4></li>
                        <li><h4><img className="sideBarIcon" src={"http://clipartmag.com/images/transparent-email-icon-38.png"} alt="email icon"/>{this.props.teacher.email} </h4></li>
                        <li><h4><img className="sideBarIcon" src={"https://cdn.onlinewebfonts.com/svg/img_198352.png"} alt="Phone icon"/>{this.props.teacher.phone} </h4></li>
                        <li><h4><img className="sideBarIcon" src={"https://www.freeiconspng.com/uploads/google-location-icon-16.png"} alt="location icon"/>{this.props.teacher.location} </h4></li>
                        </div>
                    </div>
                    <div style = {{flex: 4, fontSize: 5}}>
                        <div className = "firstSection">
                        <li><h5> Specialization: {this.props.teacher.specialization} </h5></li>
                        <li><h5> Education Level: {this.props.teacher.educationLevel} </h5></li>
                        <li><h5> Subjects Offered: {this.props.teacher.subjectsOffered} </h5></li>
                        </div>
                        <div className = "secondSection">
                        <li><h5> Average Hourly Rate: {this.props.teacher.avgHourlyRate} </h5></li>
                        <li><h5> Availability: {this.props.teacher.availability} </h5></li>
                        </div>
                        <div className = "thirdSection">
                        <li><h5> Biography: {this.props.teacher.bio} </h5></li>
                        <li><h5> Education History: {this.props.teacher.educationHistory} </h5></li>
                        </div>
                    </div>
                    </div>
                </ul> 
            </div>
                    <div className="Information" style = {{backgroundColor: "#f0d4c2", color: "#D5A253", marginTop: -16}}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h2 id="contact" style={{ flex: 1, marginBottom: 5, marginTop: 25 }}>Contact Us</h2>
                        <div>
                            <button className="btn btn-light" style={{ borderColor: '	#f0d4c2', backgroundColor: '	#f0d4c2' }}><i className="fab fa-facebook-square fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '	#f0d4c2', backgroundColor: '	#f0d4c2' }}><i className="fab fa-twitter fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '	#f0d4c2', backgroundColor: '	#f0d4c2' }}><i className="fab fa-flickr fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '	#f0d4c2', backgroundColor: '	#f0d4c2' }}><i className="fab fa-instagram fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '	#f0d4c2', backgroundColor: '	#f0d4c2' }}><i className="fab fa-tumblr fa-2x"></i></button>
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
