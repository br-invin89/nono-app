import * as types from './actionTypes'

const initialState = {
  places: [],
  currentLocation: null,
  searchedStations: [],
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.SEARCH_MARKERS_DONE:
      return {
        ...state,
        currentLocation: action.payload.currentLocation,
        places: action.payload.places
      }
    case types.SEARCH_DONE:
      return {
        ...state,
        searchedStations: action.payload.stations
      }
    default:
      return state
  }
}
