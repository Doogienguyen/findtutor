// These are merely suggested actions & initial state structure
import {
  GET_TEACHERS_ASYNC,
  ADD_TEACHER_ASYNC,
  EDIT_TEACHER_ASYNC,
  DELETE_TEACHER_ASYNC,
  PATH_CHANGE,
  TEACHER_ID,
  GET_SINGLE_ASYNC
} from '../constants'

  
  const initialState = {
    teachers: '',
    path: "HOME",
    ID: '',
    teacher: ''
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
      case PATH_CHANGE:
      return ({ ...state, path: action.path })
      case TEACHER_ID:
      return({ ...state, ID: action.ID})
      case GET_SINGLE_ASYNC:
<<<<<<< HEAD
      return({ ...state, teacher: action.teacher })
=======
      return({ ... state, teacher: action.teacher })
>>>>>>> 7ab7901f139630510afb79721bbbb5ef2fff36cb
      default:
      return state;
    }
  }

export default rootReducer;