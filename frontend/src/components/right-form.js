import React, { Component } from 'react';


class RightForm extends Component {

    state = {
        address: '',
        zipcode: '',
        radius:'',
   
    }

    onAddressChange = e => {
        this.setState({
            address: e.target.value
        })
    }

    onZipcodeChange = e => {
        this.setState({
            zipcode: e.target.value
        })
    }

    onRadiusChange = e => {
        this.setState({
            radius: e.target.value
        })
    }


  

    render() {
        return (
            <form>
            <div className="form-group custom-form">
                <label>Address</label>
                <input value={this.state.address} onChange={this.onAddressChange} type="text" className="form-control" placeholder="Enter Address" />
            </div>
            <div className="form-group">
                <label>Zipcode</label>
                <input value={this.state.zipcode} onChange={this.onZipcodeChange} type="text" className="form-control" placeholder="Enter Zipcode" />
            </div>
            <div className="form-group">
                <label>Radius </label>
                <input value={this.state.radius} onChange={this.onRadiusChange} type="text" className="form-control" placeholder="Enter Radius" />
            </div>
            
            <button type="submit" onClick={() => this.props.changeScreen("TUTORS")} className="btn btn-light float-right mt-5 custom-button">Search</button>
            </form>
        );
    }


}


export default RightForm;