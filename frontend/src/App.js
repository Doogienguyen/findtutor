import React, { Component } from 'react';
import './App.css';
import Tutors from './components/tutors'
import { connect } from 'react-redux';
// import { addTeacher, getTeachers } from './actions/index';
import Header from './components/header';
import SignUp from './components/signUp';
import TutorInfo from './components/tutorInfo';

class App extends Component {
  state = {
    usersList: [
      {
        username: 'Doug',
        password: 'doug'
      },
      {
        username: '1',
        password: '1'
      }
    ],

  }

  pageRender = () => {
    switch (this.props.currentPath) {
      case "HOME":
        return <Header />
      case "TUTORS":
        return <Tutors />
      case "TUTORPROFILE":
        return <TutorInfo />
      case "SIGNUP":
        return <SignUp />
      default:
        return <h1>404 NOT FOUND</h1>
      // code to be executed if n doesn't match any constant
    }
  }

  render() {
    return (
      this.pageRender()
    );
  }
}

const mapStateToProps = state => ({
  currentPath: state.path
})

const mapDispatchToProps = dispatch => ({
  // changePage: (page) => changePage(page)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);