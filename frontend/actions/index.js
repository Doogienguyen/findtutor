import axios from 'axios';
import {
  GET_RIDES_ASYNC,
  ADD_RIDE_ASYNC,
  EDIT_RIDE_ASYNC,
  DELETE_RIDE_ASYNC,
  LOGIN_USER_ASYNC,
  GET_USER_ASYNC,
  ADD_USER_ASYNC,
  EDIT_USER_ASYNC,
  DELETE_USER_ASYNC
} from '../constants'


/**
 *    Here are some sample asynchronous action creators that you'll likely want to use
 *    to handle basic CRUD routes from your REST API / DB
 *    
 *    Not all are necessary and they are not fully implemented as well. 
 *    Treat this as guidance.
 */

// ####################### RIDES #######################

export const getRides = () => async dispatch => {
  let response = await axios.get(`http://localhost:5000/api/rides/`);
  dispatch({ type: GET_RIDES_ASYNC, rides: response.data.rides });
}

export const addRide = ride => async dispatch => {
  let response = await axios.post('http://localhost:5000/api/rides/', ride);
  dispatch({ type: ADD_RIDE_ASYNC, ride: response.data.newRide });
}

export const editRide = (id, ride) => async dispatch => {
  await axios.put(`http://localhost:5000/api/rides/${id}`, ride);
  // let response = await axios.get(`http://localhost:5000/api/rides/`);

  dispatch({ type: EDIT_RIDE_ASYNC, rides: response.data.ride });
}

export const deleteRide = id => async dispatch => {
  await axios.delete(`http://localhost:5000/api/rides/${id}`);
  // let response = await axios.get(`http://localhost:5000/api/rides/`);
  dispatch({ type: DELETE_RIDE_ASYNC, rides: response.data.deletedRide });
}

// ####################### USERS #######################

export const loginUser = user => async dispatch => {
  let response = axios.post('');
  dispatch({ type: LOGIN_USER_ASYNC });
}

export const getUser = userID => async dispatch => {
  let response = await axios.get(`http://localhost:5000/api/users/`, userID);
  dispatch({ type: GET_USER_ASYNC, users: response.data.users });
}

export const addUser = user => async dispatch => {
  let response = await axios.post(`http://localhost:5000/api/users/`, user);
  dispatch({ type: ADD_USER_ASYNC, user: response.data.newUser });
}

export const editUser = (id, user) => async dispatch => {
  let response = await axios.put(`http://localhost:5000/api/users/${id}`, user);
  dispatch({ type: EDIT_USER_ASYNC, user: response.data.user });
}

export const deleteUser = id => async dispatch => {
  let response = await axios.delete(`http://localhost:5000/api/users/${id}`);
  dispatch({ type: DELETE_USER_ASYNC, user: response.data.deletedUser });
}
