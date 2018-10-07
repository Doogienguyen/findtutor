import React, { Component } from 'react';
import Owl from '../images/Owl5.png';
import Branch from '../images/Branch.png';
import { connect } from 'react-redux';
import { addTeacher, changePath } from '../actions/index';

let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    // x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

class SignUp extends Component {
    state = {
    }

    render() {
        return (
            <div className = "SignUpBackground"style = {{minHeight: y}}>
                <div className="header" style = {{backgroundColor: 'transparent', color: 'white'}}>
                    <a onClick = {() => this.props.changePath("HOME")}href="#default" className="logo" style = {{marginLeft: 40, fontFamily: "Fredericka the Great"}}>Tutor To-Go</a>
                    <div className="header-right" style = {{display: 'flex', flexDirection:"row"}}>
                        <h4 style = {{fontFamily: "Fredericka the Great", alignSelf: 'flex-start', marginRight: -60}}>Start your career!</h4>
                        <h4 style = {{fontFamily: "Fredericka the Great", alignSelf: 'flex-end', marginRight: 20}}>Lead the Children of the Future!</h4>
                        <img style = {{width: 60, marginBottom: -24, marginRight: 20}}src = {Owl} alt = "Owl"/>
                    </div>
                </div>
                <div style = {{display: 'flex', flexDirection: 'row'}}>
                    <div style = {{ flex: 1, alignSelf: 'flex-end', fontFamily: "Fredericka the Great", color: 'white'}}>
                        <h4 style = {{textAlign:'left', marginLeft: 20}}>Dont Wait!</h4>
                        <h4 style = {{textAlign:'center', marginBottom: 30}}>Apply now!</h4>
                        <img src = {Branch} alt = "Branch"style = {{width: 270, marginLeft: -20}}/>
                        <h4 style = {{textAlign:'center'}}>If you can dream it!</h4>
                        <h4 style = {{textAlign:'center', marginBottom: 50}}>You can do it!</h4>
                    </div>

                    {/*                                            Scrollable Input Form                                                   */}
                    <div class = "scrollable" style = {{ display: 'flex', flex: 4, backgroundColor: "gainsboro", height: y-102, alignItems: 'center', flexDirection:'column'}}>
                        <p> Things you'll want to add:</p>
                        <p>First Name, Last Name, UserName, Email, Password, Confirm Password, Phone, Location</p>
                        <p>Education Level, Specialization, Education History, Subjects Offered, Availability</p>
                        <p>Average Hourly Rate, Way to upload a file for image, Transcript, and anything else you can think of</p>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>Test</h1>

                    </div>
                </div>
            </div>
        )


    }
}

const mapDispatchToProps = dispatch => ({
    addTeacher: teacher => dispatch(addTeacher(teacher)),
    changePath: (path) => dispatch(changePath(path))
})


export default connect(null, mapDispatchToProps)(SignUp);
