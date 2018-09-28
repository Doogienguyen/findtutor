// These are merely suggested actions & initial state structure
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
  
  const initialState = {
    user: {},
    rides: [],
    token: ''       
  }
  // you may also choose to use 'localStorage' (better/standard industry practice) 
  // to manage token info instead of in your Redux store 
  // ref: https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_RIDES_ASYNC:
      return ({...state, rides: [...action.rides]})
      case ADD_RIDE_ASYNC:
      return ({...state, rides: [...state.rides, ...action.newRide]})
      case EDIT_RIDE_ASYNC:
      return ({...state, rides: [...action.ride]})
      case DELETE_RIDE_ASYNC:
      return ({...state, rides: [...action.deletedRide]})  
      
      
      case LOGIN_USER_ASYNC:
      return ({...state, user: [...action.users]})
      case GET_USER_ASYNC:
      return ({...state, users: [...state.users, ...action.users]})
      case ADD_USER_ASYNC:
      return ({...state, users: [...state.users, ...action.newUser]})
      case EDIT_USER_ASYNC:
      return ({...state, users: [...action.user]})
      case DELETE_USER_ASYNC:
      return ({...state, users: [...action.deletedUser]})
  
      default:
        return state;
    }
  }
  
  export default rootReducer;