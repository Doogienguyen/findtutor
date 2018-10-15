import React, { Component } from 'react';
import Owl from '../images/Owl5.png';
import Branch from '../images/Branch.png';
import { connect } from 'react-redux';
import { changePath, addTeacher } from '../actions/index';


class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        phone: '',
        location: '',
        education: '',
        email: '',
        history: '',
        subjects: '',
        confirmPassword: '',
        hourly: '',
        specialization: ''
    }

    submitTeacherForm = () => {
        let { firstName, lastName, username, password, phone, location, education, email, history, subjects, hourly, specialization } = this.state;
        this.props.addTeacher({
            "name": firstName + lastName,
            "username": username,
            "password": password,
            "email": email,
            "phone": phone,
            "location": location,
            "educationLevel": education,
            "specialization": specialization,
            "educationHistory": history,
            "subjectsOffered": subjects,
            "avgHourlyRate": hourly
        });

        this.setState({
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            phone: '',
            location: '',
            education: '',
            email: '',
            history: '',
            subjects: '',
            confirmPassword: '',
            hourly: '',
            specialization: ''
        })
    }

    render() {
        return (
            <div className="SignUpBackground" style={{ maxWidth: 1920 }}>
                <div className="header" style={{ backgroundColor: 'transparent', color: 'white' }}>
                    <a onClick={() => this.props.changePath("HOME")} href="#default" className="logo" style={{ marginLeft: 40, fontFamily: "Fredericka the Great" }}>Tutor To-Go</a>
                    <div className="header-right" style={{ display: 'flex', flexDirection: "row" }}>
                        <h4 style={{ fontFamily: "Fredericka the Great", alignSelf: 'flex-start', marginRight: -60 }}>Start your career!</h4>
                        <h4 style={{ fontFamily: "Fredericka the Great", alignSelf: 'flex-end', marginRight: 20 }}>Lead the Children of the Future!</h4>
                        <img style={{ width: 60, height: 86, marginBottom: -24, marginRight: 20 }} src={Owl} alt="Owl" />
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
                    {/* <div class="scrollable" style={{ display: 'flex', flex: 4, backgroundColor: "gainsboro", height: '100%', alignItems: 'center', flexDirection: 'column' }}> */}
                    <div className="register" style={{ height: '100%', width: '80%' }}>
                        <div className="row">
                            <div className="col-md-3 register-left">
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                                <h3>Welcome</h3>
                                <p>Sign up as a tutor to help students mold their future!</p>
                                <input type="submit" name="" value="Login" onClick={() => this.props.changePath('HOME')} /><br />
                            </div>
                            <div className="col-md-9 register-right">

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <h3 className="register-heading">Apply as a tutor</h3>
                                        <div className="row register-form">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="First Name" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Phone Number" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Location (Zipcode)" value={this.state.location} onChange={(e) => this.setState({ location: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Education Level" value={this.state.education} onChange={(e) => this.setState({ education: e.target.value })} />
                                                </div>

                                                <div className="form-group">
                                                    <div className="maxl">
                                                        <label className="radio inline">
                                                            <input type="radio" name="gender" value="male" defaultChecked />
                                                            <span> Male </span>
                                                        </label>
                                                        <label className="radio inline">
                                                            <input type="radio" name="gender" value="female" />
                                                            <span>Female </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Your Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Education History" value={this.state.history} onChange={(e) => this.setState({ history: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Subjects Offered" value={this.state.subjects} onChange={(e) => this.setState({ subjects: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Hourly Rate" value={this.state.hourly} onChange={(e) => this.setState({ hourly: e.target.value })} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Specialization" value={this.state.specialization} onChange={(e) => this.setState({ specialization: e.target.value })} />
                                                </div>

                                                <input type="submit" className="btnRegister" value="Sign Up" onClick={() => this.submitTeacherForm()} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            // </div>
        )


    }
}

const mapDispatchToProps = dispatch => ({
    changePath: (path) => dispatch(changePath(path)),
    addTeacher: (teacher) => dispatch(addTeacher(teacher))
})


export default connect(null, mapDispatchToProps)(SignUp);
