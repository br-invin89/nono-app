import * as types from './actionTypes';

const initialState = {
  personalInfo: {
    name: 'Theo Rouilly',
    phone: '32 30 22 144 3331',
    email: 'theorouilly@nono.fr',
    birthDate: '18/06/2000'
  },
  cash: {
    money: 300,
    couponCodeActied: false,
    couponCode: null
  },
  histories: [],
  history: null
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.ADD_COUPON_SUCCESS:
      return addCoupon(state, action.payload.couponCode)
    case types.LOAD_HISTORY_SUCCESS:
      return {
        ...state,
        histories: action.payload.histories
      }
    case types.SELECT_HISTORY:
      return {
        ...state,
        history: state.histories[action.payload.index]
      }
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

export function loadHistories(state, histories) {
  console.log("sereerrererere");
  console.log(histories);
  
}