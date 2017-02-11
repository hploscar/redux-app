/*eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { loadUser } from './actions/userActions'
import '../semantic/dist/semantic.min.css'

const store = configureStore()

store.dispatch(loadUser())
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
