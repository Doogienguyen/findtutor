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
    y = w.innerHeight || e.clientHeight || g.clientHeight;

class SignUp extends Component {
    state = {
    }

    render() {
        return (
            <div className="SignUpBackground" style={{ minHeight: y }}>
                <div className="header" style={{ backgroundColor: 'transparent', color: 'white' }}>
                    <a onClick={() => this.props.changePath("HOME")} href="#default" className="logo" style={{ marginLeft: 40, fontFamily: "Fredericka the Great" }}>Tutor To-Go</a>
                    <div className="header-right" style={{ display: 'flex', flexDirection: "row" }}>
                        <h4 style={{ fontFamily: "Fredericka the Great", alignSelf: 'flex-start', marginRight: -60 }}>Start your career!</h4>
                        <h4 style={{ fontFamily: "Fredericka the Great", alignSelf: 'flex-end', marginRight: 20 }}>Lead the Children of the Future!</h4>
                        <img style={{ width: 60, marginBottom: -24, marginRight: 20 }} src={Owl} alt="Owl" />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: 1, alignSelf: 'flex-end', fontFamily: "Fredericka the Great", color: 'white' }}>
                        <h4 style={{ textAlign: 'left', marginLeft: 20 }}>Dont Wait!</h4>
                        <h4 style={{ textAlign: 'center', marginBottom: 30 }}>Apply now!</h4>
                        <img src={Branch} alt="Branch" style={{ width: 270, marginLeft: -20 }} />
                        <h4 style={{ textAlign: 'center' }}>If you can dream it!</h4>
                        <h4 style={{ textAlign: 'center', marginBottom: 50 }}>You can do it!</h4>
                    </div>

                    {/*                                            Scrollable Input Form                                                   */}
                    <div class="scrollable" style={{ display: 'flex', flex: 4, backgroundColor: "gainsboro", height: y - 102, alignItems: 'center', flexDirection: 'column' }}>

                        <div class="register" style = {{marginTop: -10}}>
                            <div class="row">
                                <div class="col-md-3 register-left">
                                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                                    <h3>Welcome</h3>
                                    <p>Sign up as a tutor to help students mold their future or sign up as a student and learn from the best tutors near you!</p>
                                    <input type="submit" name="" value="Login" /><br />
                                </div>
                                <div class="col-md-9 register-right">
                                    <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tutor</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Student</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <h3 class="register-heading">Apply as a tutor</h3>
                                            <div class="row register-form">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="First Name" value={this.state.firstName} onChange={this.onFirstName} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Last Name" value={this.state.lastName} onChange={this.onLastNameChange}/>
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Username" value={this.state.username} onChange={this.onUsernameChange}/>
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Phone Number" value={this.state.phone} onChange={this.onPhoneChange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Location (Zipcode)" value={this.state.location} onChange={this.onLocationChange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Education Level" value={this.state.education} onChange={this.onEducationChange} />
                                                    </div>

                                                    <div class="form-group">
                                                        <div class="maxl">
                                                            <label class="radio inline">
                                                                <input type="radio" name="gender" value="male" checked />
                                                                <span> Male </span>
                                                            </label>
                                                            <label class="radio inline">
                                                                <input type="radio" name="gender" value="female" />
                                                                <span>Female </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" placeholder="Your Email" value={this.state.email} onChange={this.onEmailChange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Education History" value={this.state.history} onChange={this.onHistoryChange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Subjects Offered" value={this.state.subjects} onChange={this.onSubjectsChange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Hourly Rate" value={this.state.hourly} onChange={this.onHourlychange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Specialization" value={this.state.specialization} onChange={this.onSpecializationChange} />
                                                    </div>

                                                    <input type="submit" class="btnRegister" value="Sign Up" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <h3 class="register-heading">Apply as a student</h3>
                                            <div class="row register-form">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="First Name" value={this.state.FirstName} onChange={this.onFirstNameChange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Last Name" value={this.state.lastName} onChange={this.onLastNameChange} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" placeholder="Email" value={this.state.email} onChange={this.onEmail} />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" placeholder="Password" value={this.state.password} onChange={this.onPassword} />
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="password" class="form-control" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} />
                                                    </div>
                                                    <input type="submit" class="btnRegister" value="Sign Up" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

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
