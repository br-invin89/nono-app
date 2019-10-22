import * as types from './actionTypes';

const initialState = {
  personalInfo: {
    name: 'KCS'
  },
  cash: {
    money: 300,
    couponCodeActied: false
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    default: 
      return state
  }
}
