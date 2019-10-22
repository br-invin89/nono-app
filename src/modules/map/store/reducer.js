import * as types from './actionTypes'

const initialState = {
  places: [],
  currentLocation: null,
  placesOnMap: [],
  place: null
}

export default function reducer(state = initialState, action) {
  switch(action.type) {    
    case types.LOAD_PLACES_ON_MAP_SUCCESS:
      return {
        ...state,
        currentLocation: action.payload.currentLocation,
        placesOnMap: action.payload.places
      }
    case types.SEARCH_PLACES_REQUEST:
      return {
        ...state,
        places: []
      }
    case types.SEARCH_PLACES_SUCCESS:
      return {
        ...state,
        places: action.payload.places
      }
    case types.SELECT_PLACE:
      return {
        ...state,
        place: state.places[action.payload.index]
      }
    default:
      return state
  }
}
