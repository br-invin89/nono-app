import * as types from './actionTypes'

export function tryLogin(phoneNumber) {
  return {
    type: types.LOGIN_REQUEST,
    payload: { phoneNumber }
  }
}

export function clearMessage() {
  return {
    type: types.CLEAR_MESSAGE
  }
}

export function doLogout() {
  return {
    type: types.LOGOUT_DONE
  }
}
