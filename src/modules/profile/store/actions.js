import * as types from './actionTypes'

export function addCoupon(couponCode) {
  return {
    type: types.ADD_COUPON_REQUEST,
    payload: { couponCode }
  }
}
