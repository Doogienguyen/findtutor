import axios from 'axios';
import {
  GET_TEACHERS_ASYNC,
  ADD_TEACHER_ASYNC,
  EDIT_TEACHER_ASYNC,
  DELETE_TEACHER_ASYNC,
  PATH_CHANGE,
  TEACHER_ID,
  GET_SINGLE_ASYNC
} from '../constants'


/**
 *    Here are some sample asynchronous action creators that you'll likely want to use
 *    to handle basic CRUD routes from your REST API / DB
 *    
 *    Not all are necessary and they are not fully implemented as well. 
 *    Treat this as guidance.
 */

// ####################### teachers #######################

export const getTeachers = () => async dispatch => {
  let response = await axios.get(`http://localhost:5000/api/teachers/`);
  dispatch({ type: GET_TEACHERS_ASYNC, teachers: response.data.teachers });
}

export const singleTeacher = (id) => async dispatch => {
  let response = await axios.get(`http://localhost:5000/api/teachers/${id}`);
  dispatch({ type: GET_SINGLE_ASYNC, teacher: response.data.teacher });
  console.log(response.data.teacher);
}

export const addTeacher = teacher => async dispatch => {
  let response = await axios.post('http://localhost:5000/api/teachers/', teacher);
  dispatch({ type: ADD_TEACHER_ASYNC, teacher: response.data.newTeacher });
}

export const editTeacher = (id, teacher) => async dispatch => {
  let response = await axios.put(`http://localhost:5000/api/teachers/${id}`, teacher);
  dispatch({ type: EDIT_TEACHER_ASYNC, teachers: response.data.teacher });
}

export const deleteTeacher = id => async dispatch => {
  let response = await axios.delete(`http://localhost:5000/api/teachers/${id}`);
  dispatch({ type: DELETE_TEACHER_ASYNC, teachers: response.data.deletedTeacher });
}

export const changePath = path => async dispatch => {
  dispatch({ type: PATH_CHANGE, path: path })
}

export const tutorID = ID => async dispatch => {
  dispatch({ type: TEACHER_ID, ID: ID})
}
