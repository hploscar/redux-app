import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import IndexPage from './components/index/IndexPage'
import HomePage from './components/home/HomePage'
import UserPage from './components/users/UserPage'
import AboutPage from './components/about/AboutPage'
import LogInPage from './components/LogInPage'
import auth from './auth/authenticator'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
    <Route path="/login" component={LogInPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </Route>
)
// onEnter={requireAuth} />
function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
