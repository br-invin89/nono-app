import * as types from './actionTypes'

export function loadPlacesOnMap() {
  return {
    type: types.LOAD_PLACES_ON_MAP_REQUEST
  }
}

export function searchPlaces(searchVal) {
  return {
    type: types.SEARCH_PLACES_REQUEST,
    payload: { searchVal }
  }
}

export function selectPlace(index) {
  return {
    type: types.SELECT_PLACE,
    payload: { index }
  }
}
