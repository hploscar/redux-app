import * as types from './actionTypes'
import userApi from '../api/UserApi'

export function loadUserSuccess(user) {
  return {type: types.LOAD_USER_SUCCESS, user}
}

export function loadUser() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return userApi.getUserInfo().then(user => {
      dispatch(loadUserSuccess(user))
    }).catch(error => {
      throw error
    })
  }
}
