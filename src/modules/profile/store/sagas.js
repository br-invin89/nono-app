import { put, takeEvery, takeLatest, call, delay } from 'redux-saga/effects'
import * as types from './actionTypes'

export default function* watcher() {  
  // yield takeLatest(types.SEARCH_REQUEST, doSearch)
}

/*
export function* doSearchMarkers(action) {
  const { currentLocation, places } = gmapService.searchStationGmap()

  yield put({ type: types.SEARCH_MARKERS_DONE, payload: { currentLocation, places } })
}
*/
