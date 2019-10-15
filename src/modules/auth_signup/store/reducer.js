import * as types from './actionTypes';

const initialState = {
  accountInfo: null,
  isFetching: false,
  statusMessage: '',
  statusMessageType: '',
  phoneNumber: '',
  confirmCode: '',
  name: '',
  email: '',
  birthday: ''
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.SET_PHONE_NUMBER: 
      return {
        ...state,
        phoneNumber: action.payload.phoneNumber
      }
    case types.SET_CONFIRM_CODE: 
      return {
        ...state,
        confirmCode: action.payload.confirmCode
      }
    case types.SET_NAME: 
      return {
        ...state,
        name: action.payload.name
      }
    case types.SET_EMAIL: 
      return {
        ...state,
        email: action.payload.email
      }
    case types.SET_BIRTHDAY: 
      return {
        ...state,
        birthday: action.payload.birthday
      }
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        statusMessage: action.payload.statusMessage,
        statusMessageType: 'success'
      }
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: false,
        statusMessage: action.payload.statusMessage,
        statusMessageType: 'danger'
      }
    case types.CLEAR_MESSAGE:
      return {
        ...state,
        statusMessage: ''
      }
    default: 
      return state
  }
}
