import React, {PropTypes} from 'react'
import { Link, IndexLink } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as sessionActions from '../../actions/sessionActions'
import { Menu, Icon } from 'semantic-ui-react'

class Header extends React.Component {
  constructor(props) {
    super()
    this.logOut = this.logOut.bind(this)
  }

  logOut(event) {
    event.preventDefault()
    this.props.actions.logOutUser()
  }

  render() {
    if (this.props.logged_in) {
      return (
        <Menu stackable>
          <Menu.Item>
            <IndexLink to="/" activeClassName="active"><Icon name="home" /></IndexLink>
          </Menu.Item>
          <Menu.Item>
            <Link to="/home" activeClassName="active">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about" activeClassName="active">About</Link>
          </Menu.Item>
          <Menu.Item>
            <a href="/logout" onClick={this.logOut}>log out</a>
          </Menu.Item>
        </Menu>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {logged_in: state.session}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
