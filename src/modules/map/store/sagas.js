import { put, takeEvery, takeLatest, call, delay } from 'redux-saga/effects'
import * as gmapService from '../common/services/gmap'
import * as types from './actionTypes'

export default function* watcher() {
  yield takeLatest(types.SEARCH_PLACES_REQUEST, doSearch)
  yield takeLatest(types.LOAD_PLACES_ON_MAP_REQUEST, loadPlacesOnMap)
}

export function* loadPlacesOnMap(action) {
  try {
    const { currentLocation, places } = gmapService.searchPlacesOnMap()
    yield put({ type: types.LOAD_PLACES_ON_MAP_SUCCESS, payload: { currentLocation, places } })
  } catch(e) {
    yield put({ type: types.LOAD_PLACES_ON_MAP_FAILURE })
  }  
}

export function* doSearch(action) {
  try {
    const { places } = gmapService.searchPlaces()
    console.log('qwe===weq=we=q')
    console.log(places)
    yield put({ type: types.SEARCH_PLACES_SUCCESS, payload: { places } })
  } catch(e) {
    yield put({ type: types.SEARCH_PLACES_FAILURE })
  }  
}
