import React from 'react';

const Profile = () => {
    return ( 
        <div className = 'container'>
            <h1> Name: {this.props.teacher.name} </h1>
            <h2> Email: {this.props.teacher.email} </h2>


        </div>
     );
}
 
export default Profile;