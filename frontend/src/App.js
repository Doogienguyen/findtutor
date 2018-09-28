import React, { Component } from 'react';
import './App.css';
import Tutors from './components/tutors'
import { connect } from 'react-redux';
import { addTeacher, getTeachers } from './actions/index';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Tutors />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTeacher: teacher => dispatch(addTeacher(teacher)),
  getTeachers: () => dispatch(getTeachers())
})

export default connect(null, mapDispatchToProps)(App);