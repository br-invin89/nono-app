import * as types from './actionTypes'

export function doSearchMarkers() {
  return {
    type: types.SEARCH_MARKERS_REQUEST
  }
}

export function doSearch() {
  return {
    type: types.SEARCH_REQUEST
  }
}
