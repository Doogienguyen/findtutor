import React, { Component } from 'react';
import { array, func } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

class Tutors extends Component {
  state = {
    search: ''
  }


  navigateToProfile = name => {

  }


  render() {
    return (
      <div>
        <input />
        <button> Search </button>


        <div className='mapBorder'>
          <div className='mapContainer'>
            {/* props.map HERE! */}
            <div className='tutorsContainer'>
              <div className='tutorsThumbnail' onClick = {() => this.navigateToProfile('insert name here')}>
                <img className='tutorsImage' src='https://redwoodcodeacademy.com/wp-content/uploads/2017/02/IMG_0096-12.jpg' />
                <ul>
                  <li><text>Name: </text></li>
                  <li><text>Email: </text></li>
                  <li><text>Specialization: </text></li>
                  <li><text>Education History: </text></li>
                  <li><text>Hourly Rate: </text></li>
                  <li><text>Location: </text></li>
                </ul>
              </div>
              <div className='tutorsThumbnail2'>
                <img class='tutorsImage' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/1002658_859187924139444_2581543330501549710_n.jpg?_nc_cat=107&oh=1987b58dff8b8886152a83d05f729fb4&oe=5C52997A' />
                <ul>
                  <li><text>Name: </text></li>
                  <li><text>Email: </text></li>
                  <li><text>Specialization: </text></li>
                  <li><text>Education History: </text></li>
                  <li><text>Hourly Rate: </text></li>
                  <li><text>Location: </text></li>
                </ul>
              </div>
            </div>
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

export default Tutors;