import { put, takeEvery, takeLatest, call } from 'redux-saga/effects'
import * as types from './actionTypes'
import * as firebaseService from '../common/services/firebase'
import * as virtualAccount from '../common/utils/virtualAccount'
import { Actions } from 'react-native-router-flux'

export default function* watcher() {
  yield takeLatest(types.LOGIN_REQUEST, tryLogin)
}

export function* tryLogin(action) {  
  const { phoneNumber } = action.payload
  const email = virtualAccount.getEmail(phoneNumber)
  const password = virtualAccount.getPassword(phoneNumber)

  try {
    const accountInfo = yield call(firebaseService.tryLogin, { phoneNumber, email, password })
    yield put({ type: types.LOGIN_DONE, payload: { accountInfo } })
    console.log(accountInfo)
    if (accountInfo.isFirst) {
      Actions['signup_hint_find_station'] ()
    } else {
      Actions['authorized']()
    }    
  } catch (e) {
    yield put({ type: types.LOGIN_FAILURE, payload: { statusMessage: 'Login failed. Input correct phone number.' } })
  }
}
