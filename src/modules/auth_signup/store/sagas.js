import { put, takeEvery, takeLatest, call, delay } from 'redux-saga/effects'
import * as types from './actionTypes'
import * as firebaseService from '../common/services/firebase'
import * as authTypes from '../../auth/store/actionTypes'
import * as virtualAccount from '../../auth/common/utils/virtualAccount'
import { Actions } from 'react-native-router-flux'

export default function* watcher() {
  yield takeLatest(types.SEND_CONFIRM_CODE, sendConfirmCode)
  yield takeLatest(types.SIGNUP_REQUEST, trySignup)
}

export function* sendConfirmCode(action) {
  const confirmCode = virtualAccount.getConfirmCode(action.payload.phoneNumber)
  console.log(confirmCode)
  // send confirm code by sms
  yield put({ type: types.SET_CONFIRM_CODE, payload: { confirmCode } })
}

export function* trySignup(action) {
  const { accountInfo } = action.payload
  const email = virtualAccount.getEmail(accountInfo.phoneNumber)
  const password = virtualAccount.getPassword(accountInfo.phoneNumber)

  try {
    yield call(firebaseService.trySignup, { email, password, accountInfo })
    yield put({ type: types.SIGNUP_SUCCESS, payload: { statusMessage: 'Signup success.' } })
    const { phoneNumber } = accountInfo
    yield put({ type: authTypes.LOGIN_REQUEST, payload: { phoneNumber } })
  } catch (e) {
    yield put({ type: types.SIGNUP_FAILURE, payload: { statusMessage: e.message } })
  }
}
