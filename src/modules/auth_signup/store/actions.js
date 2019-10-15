import * as types from './actionTypes'

export function setPhoneNumber(phoneNumber) {
  return {
    type: types.SET_PHONE_NUMBER,
    payload: { phoneNumber }
  }
}

export function sendConfirmCode(phoneNumber) {
  return {
    type: types.SEND_CONFIRM_CODE,
    payload: { phoneNumber }
  }
}

export function setConfirmCode(confirmCode) {
  return {
    type: types.SET_CONFIRM_CODE,
    payload: { confirmCode }
  }
}

export function setName(name) {
  return {
    type: types.SET_NAME,
    payload: { name }
  }
}

export function setEmail(email) {
  return {
    type: types.SET_EMAIL,
    payload: { email }
  }
}

export function setBirthday(birthday) {
  return {
    type: types.SET_BIRTHDAY,
    payload: { birthday }
  }
}

export function trySignup(accountInfo) {
  return {
    type: types.SIGNUP_REQUEST,
    payload: { accountInfo }
  }
}

export function clearMessage() {
  return {
    type: types.CLEAR_MESSAGE
  }
}
