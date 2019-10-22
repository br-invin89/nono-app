import * as types from './actionTypes'


export function addCoupon(couponCode) {
  return {
    type: types.ADD_COUPON_REQUEST,
    payload: { couponCode }
  }
}

export function loadHistories(histories) {
  return {
    type: types.LOAD_HISTORY_REQUEST,
    payload: { histories }
  }
}