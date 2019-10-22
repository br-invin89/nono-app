import * as types from './actionTypes';

const initialState = {
  personalInfo: {
    name: 'KCS'
  },
  cash: {
    money: 300,
    couponCodeActied: false,
    couponCode: null
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.ADD_COUPON_SUCCESS:
      return addCoupon(state, action.payload.couponCode)
    default: 
      return state
  }
}

function addCoupon (state, couponCode) {
  let { cash } = state
  cash.couponCode = couponCode
  cash.couponCodeActived = true
  return {
    ...state,
    cash
  }
}
