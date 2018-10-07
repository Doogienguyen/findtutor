import React, { Component } from 'react';
import './App.css';
import Tutors from './components/tutors'
import { connect } from 'react-redux';
import { addTeacher, getTeachers, changePath } from './actions/index';
import Header from './components/header'
import LeftForm from './components/left-form';
import RightForm from './components/right-form';
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
    badEntry: false,
  }

  addToUsers = user => {
    let newUsers = [...this.state.usersList, user];
    this.setState({
      usersList: newUsers
    });
  }

  login = () => {
    let { username, password } = this.state;

    for (var i = 0; i < this.state.usersList.length; i++) {
      if (password !== this.state.usersList[i].password || username !== this.state.usersList[i].username) {
        this.setState({ badEntry: true })
      } else {
        this.changeScreen('TUTOR');
        this.setState({
          badEntry: false
        })
      }
    }
  }

  changeScreen = page => {
    this.setState({ path: page });
  }

  render() {
    return (
     this.props.currentPath == "HOME"
      ? <div className='container'>
        <Header />
        <div className="row forms-div">


          {/* Left Half of Page */}
          <div className="col">
            <h2> Login</h2>
            <div className="col form-left gray">
              <LeftForm 
              addToUsers={this.addToUsers}
              />

            </div>
          </div>
          {/* Right Half of Page */}
          <div className="col offset-md-2 ">
            <h2> Hire a Tutor</h2>
            <div className="col list-right gray">
              <RightForm login = {this.login}
              addUsers = {this.addUsers}
              changeScreen = {this.changeScreen}
              />
            </div>
          </div>
        </div>
      </div>
      : this.props.currentPath == "TUTORS"
      ? <Tutors />
      : this.props.currentPath == "TUTORPROFILE"
      ? <TutorInfo/>
      : <h1>Login</h1>
    );
  }
}
const mapStateToProps = state => ({
  currentPath: state.path
})

const mapDispatchToProps = dispatch => ({
  addTeacher: teacher => dispatch(addTeacher(teacher)),
  getTeachers: () => dispatch(getTeachers()),
  changePath: (path) => dispatch(changePath(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);