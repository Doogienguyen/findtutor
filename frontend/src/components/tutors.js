import React, { Component } from 'react';
import { array, func } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTeachers, changePath, tutorID, singleTeacher } from '../actions/index';

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
      this.props.teachers &&
      <div>
        <div className = 'searchBar'>
          <input />
          <button className = 'btn btn-primary btn-custom' > Search </button>
        </div>

        <div className='mapBorder'>
          <div className='mapContainer'>
            {/* props.map HERE! */}
            {
              this.props.teachers.map((teachers, i) => {
                return (<div className='tutorsContainer' key={i}>
                  <div className='tutorsThumbnail' onClick={() => this.navigateToProfile('insert name here')}>
                    <img className='tutorsImage' src={teachers.imgUrl} />
                    <div className='test'>
                      <ul className='test3'>
                        <li><h3>Name: {teachers.name}</h3></li>
                        <li><h3>Email: {teachers.email}</h3></li>
                        <li><h3>Specialization: {teachers.specialization}</h3></li>
                        <li><h3>Education History: {teachers.educationLevel}</h3></li>
                        <li><h3>Hourly Rate: {teachers.avgHourlyRate}</h3></li>
                      </ul>
                      <ul className='test2'>
                        <li><h3>Phone: {teachers.phone}</h3></li>
                        <li><h3>Subjects Offered: {teachers.subjectsOffered}</h3></li>
                        <li><h3>Availability: {teachers.availability}</h3></li>
                        <li><h3>Hourly Rate: {teachers.avgHourlyRate}</h3></li>
                        <li><h3>Location: {teachers.location}</h3></li>
                      </ul>
                    </div>
                    <button className = 'btn btn-primary' onClick = {() => this.tutorProfile(teachers._id)}/>
                  </div>
                </div>)
              })
            }


            {/* props.map ENDS HERE! */}

          </div>
        </div>
        {
          // props.people.map((person, i) => {
          //   /**
          //    * Feel free to inspect the person variable here
          //    * 
          //    * Note we will want to make this table row clickable
          //    */
          //   return (
          //     <tr onClick={() => { props.selectPerson(person.id) }} key={person.id}>
          //       <th>{i + 1}</th>
          //       <td>{person.name}</td>
          //       <td> Moveslist</td>
          //       <td>{person.id}</td>
          //     </tr>
          //   )
          // })
        }
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