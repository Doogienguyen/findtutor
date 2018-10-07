import React, { Component } from 'react';
import Logo from '../images/LogoThumbnail.png';
import Doogie from '../images/Doogie.jpg';
import John from '../images/John.jpg';
import Eric from '../images/Eric.jpg';
import { connect } from 'react-redux';
import {changePath } from '../actions/index';

// color pallete: https://www.colorcombos.com/color-schemes/386/ColorCombo386.html

class Header extends Component {
    state = {
        zipCode: ''
    }

    onZipChange = e => {
        this.setState({
            zipCode: e.target.value
        })
    }

    render() {
        return (
            <div>

                {/*                                           HEADER                                                */}
                <div className="header">
                    <a href="#default" className="logo">Tutor To-Go</a>
                    <div className="header-right">
                        <a className="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <a onClick = {() => this.props.changePath("SIGNUP")}>Sign Up</a>
                    </div>
                </div>

                {/*                                           Enter ZIP                                                */}
                <div className="BackgroundImage" id = "home">
                    <div className="FindTutor">
                        <div className="form-group custom-form">
                            <div className="form-group">
                                <img alt = "Logo" src={Logo} className="LogoThumbnail" style={{ width: 75, height: 75, marginBottom: 0 }} />
                                <p className="LogoThumbnail" style={{ fontWeight: 'bold', fontStyle: "italic", marginTop: 0, marginBottom: 60 }}>Tutor To-Go</p>
                                <h4 style={{ fontFamily: 'Mali' }}>Good Morning!</h4>
                                <p style={{ color: '#505050', fontSize: 12, fontFamily: 'Open Sans Condensed', fontWeight: "bold" }}>Looking for some Immediate help?</p>
                                <hr style={{ marginBottom: 30, marginTop: 20 }} />
                                <p style={{ textAlign: 'center', color: '#505050', fontFamily: 'Open Sans Condensed' }}>Find a Tutor near your area for right now!</p>
                                <input value={this.state.zipCode} onChange={this.onZipChange} type="text" className="form-control" placeholder="Enter Your Zip Code" />
                            </div>
                            <button type="submit" onClick = {() => this.props.changePath("TUTORS")}className="btn btn-info float-right" style={{ marginBottom: 40 }}>Search!</button>
                        </div>
                        <div className="custom-form2">
                            <div style={{ alignSelf: 'flex-end', marginLeft: 20, fontFamily: 'Srisakdi', color: 'white', width: 300 }}>
                                <p style={{ margin: 0, textAlign: 'center' }}>Over 50 Verified Tutors and Counting</p>
                                <p style={{ margin: 0, textAlign: 'center' }}>Online lessons. Real–world results.</p>
                                <p style={{ marginBottom: 15, textAlign: 'center' }}>Private, 1–on–1 lessons with the expert instructor of your choice.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*                                           CONTACT                                                */}
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


                {/*                                           ABOUT US                                                */}
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h2 id="about"style={{ flex: 1, marginBottom: 5, marginTop: 25 }}>About Us</h2>
                    <div>
                        <img className = "profileThumbnail" style = {{margin:4}} src = {John} alt = "John"/>
                        <img className = "profileThumbnail" style = {{margin:4}} src = {Eric} alt = "Eric"/>
                        <img className = "profileThumbnail" style = {{margin:4}} src = {Doogie} alt = "Doug"/>
                    </div>
                    </div>
                </div>
            </div>
        )


    }
}



const mapDispatchToProps = dispatch => ({
    changePath: (path) => dispatch(changePath(path))
})

export default connect(null, mapDispatchToProps)(Header);
