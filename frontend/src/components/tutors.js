import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTeachers, changePath, tutorID, singleTeacher } from '../actions/index';
import Doogie from '../images/Doogie.jpg';
import John from '../images/John.jpg';
import Eric from '../images/Eric.jpg';

class Tutors extends Component {
  state = {
    search: ''
  }


  navigateToProfile = name => {

  }

  componentDidMount() {
    this.props.getTeachers()
  }

  tutorProfile = ID => {
    this.props.tutorID(ID)
    this.props.singleTeacher(ID)

    this.props.changePath("TUTORPROFILE")
  }

  render() {
    let { teachers } = this.props
    return (
      teachers &&
      <div style={{ backgroundColor: '#e5ebec', height: '100%', marginBottom: -100 }}>
        {                                                /* HEADER                                                */}
        <div className="header" style={{ backgroundColor: '#ddbca0' }}>
          <a href="#default" className="logo">Tutor To-Go</a>
          <a style={{ display: 'flex' }}>
            <input style={{ alignSelf: 'center', marginLeft: 50 }} placeholder="Search for Tutors Nearby" />
            <button style={{ alignSelf: 'center', marginLeft: 10 }} className="btn btn-info">Search</button>
          </a>
          <div className="header-right">
            <a className="active" href="#home" onClick={() => this.props.changePath("HOME")}>Home</a>
            <a onClick={() => this.props.changePath("SIGNUP")}>Sign Up</a>
          </div>
        </div>


        <div>
          <div className='mapBorder' style={{ backgroundColor: '#cbd3dd' }}>
            <div className='mapContainer'>
              {/* props.map HERE! */}
              {
                teachers.map((teachers, i) => {
                  return (
                    <div className='tutorsContainer' key={i} style={{ backgroundColor: '#d0b1ad' }}>
                      <div className='tutorsThumbnail' onClick={() => this.navigateToProfile('insert name here')}>
                        <img className='tutorsImage' style = {{ marginTop: 10}} src={teachers.imgUrl} alt="Tutor Profile" />
                        <div style={{ display: 'flex', fontFamily: 'Open Sans Condensed'}}>
                          <ul style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
                            <li><h3>Name: {teachers.name}</h3></li>
                            <li><h3>Email: {teachers.email}</h3></li>
                            <li><h3>Specialization: {teachers.specialization}</h3></li>
                            <li><h3>Education History: {teachers.educationLevel}</h3></li>
                            <li><h3>Hourly Rate: {teachers.avgHourlyRate}</h3></li>
                            <li><h3>Availability: {teachers.availability}</h3></li>
                          </ul>
                        </div>
                        <button  style = {{ marginBottom: 10}} className='btn btn-primary' onClick={() => this.tutorProfile(teachers._id)}>My Profile</button>
                      </div>
                    </div>)
                })
              }
              {/* props.map ENDS HERE! */}

            </div>
          </div>
        </div>

        <div className="Information" style={{ backgroundColor: "#ddbca0", color: "#e5ebec", marginTop: -20 }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h2 id="contact" style={{ flex: 1, marginBottom: 5, marginTop: 25 }}>Contact Us</h2>
            <div>
              <button className="btn btn-light" style={{ borderColor: '#ddbca0', backgroundColor: '#ddbca0' }}><i className="fab fa-facebook-square fa-2x"></i></button>
              <button className="btn btn-light" style={{ borderColor: '#ddbca0', backgroundColor: '#ddbca0' }}><i className="fab fa-twitter fa-2x"></i></button>
              <button className="btn btn-light" style={{ borderColor: '#ddbca0', backgroundColor: '#ddbca0' }}><i className="fab fa-flickr fa-2x"></i></button>
              <button className="btn btn-light" style={{ borderColor: '#ddbca0', backgroundColor: '#ddbca0' }}><i className="fab fa-instagram fa-2x"></i></button>
              <button className="btn btn-light" style={{ borderColor: '#ddbca0', backgroundColor: '#ddbca0' }}><i className="fab fa-tumblr fa-2x"></i></button>
            </div>
            <h6 style={{ fontFamily: 'Open Sans Condensed', marginTop: 5 }}>Email us at:<a style={{ marginLeft: 5, color: "#e5ebec" }} href="" target="_top">Tutor_ToGo@Gmail.com</a></h6>
            <h6 style={{ fontFamily: 'Open Sans Condensed', marginTop: 5 }}>For More Information Call us at:  <a style={{ marginLeft: 5, color: "#e5ebec" }} href="" target="_top">(714) 714-7147</a></h6>
          </div>


          {/*                                           ABOUT US                                                */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h2 id="about" style={{ flex: 1, marginBottom: 5, marginTop: 25 }}>About Us</h2>
            <div>
              <img className="profileThumbnail" style={{ margin: 4 }} src={John} alt="John" />
              <img className="profileThumbnail" style={{ margin: 4 }} src={Eric} alt="Eric" />
              <img className="profileThumbnail" style={{ margin: 4 }} src={Doogie} alt="Doug" />
            </div>
          </div>
        </div>

      </div>

    );
  }
}

const mapStateToProps = state => ({
  teachers: state.teachers,
  teacher: state.teacher
})

const mapDispatchToProps = dispatch => ({
  getTeachers: () => dispatch(getTeachers()),
  changePath: (path) => dispatch(changePath(path)),
  tutorID: (ID) => dispatch(tutorID(ID)),
  singleTeacher: ID => dispatch(singleTeacher(ID))

})

export default connect(mapStateToProps, mapDispatchToProps)(Tutors);