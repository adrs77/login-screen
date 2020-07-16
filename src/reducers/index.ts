// @ts-ignore
import {
    LOGIN,
    UNLOG
  } from "../constants/action-types";
  
  const initialState = {
    auth: false
  };
  
  function rootReducer(state = initialState, action: Action) {
    switch (action.type) {
      case LOGIN:
        return {...state, auth: action.payload.auth}
      case UNLOG:
        return {...state, auth: action.payload.auth}
      default:
        break;
    }
  
    return state;
  }
  
  export default rootReducer;

  export interface Action {
    payload: any,
    type: String,
  }