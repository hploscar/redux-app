import {combineReducers} from 'redux'
import user from './userReducer'
import session from './sessionReducer'

const rootReducer = combineReducers({
  // short hand property names
  user,
  session
})

export default rootReducer
