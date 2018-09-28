// These are merely suggested actions & initial state structure
import {
  GET_TEACHERS_ASYNC,
  ADD_TEACHER_ASYNC,
  EDIT_TEACHER_ASYNC,
  DELETE_TEACHER_ASYNC,
} from '../constants'

  
  const initialState = {
    teachers: ''     
  }
  // you may also choose to use 'localStorage' (better/standard industry practice) 
  // to manage token info instead of in your Redux store 
  // ref: https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TEACHERS_ASYNC:
      return ({...state, teachers: [...action.teachers]})
      case ADD_TEACHER_ASYNC:
      return ({...state, teachers: [...state.teachers, ...action.newTeacher]})
      case EDIT_TEACHER_ASYNC:
      return ({...state, teachers: [...action.teacher]})
      case DELETE_TEACHER_ASYNC:
      return ({...state, teachers: [...action.deletedTeacher]})  
      default:
      return state;
    }
  }

  export default rootReducer;