import * as types from './actionTypes'

export const initialState = {
  isFirstOpen: true,
  language: 'fr'
};

export default function AppStateReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case types.SET_FIRST_OPEN:
      return {
        ...state,
        isFirstOpen: false,
      };
    case types.SET_LANGUAGE:
      return {
        ...state,
        language: action.language ? action.language : state.language
      };
    default:
      return state;
  }
}
