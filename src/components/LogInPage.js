import React, {PropTypes} from 'react'
import TextInput from './common/TextInput'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as sessionActions from '../actions/sessionActions'
import { Grid, Icon, Header, Form, Segment, Button } from 'semantic-ui-react'

class LogInPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {credentials: {email: 'sophie@email.com', password: 'password'}}
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange(event) {
    const field = event.target.name
    const credentials = this.state.credentials
    credentials[field] = event.target.value
    return this.setState({credentials: credentials})
  }

  onSave(event) {
    event.preventDefault()
    this.props.actions.loginUser(this.state.credentials)
  }

  render() {
    return (
      <Grid centered container verticalAlign="middle">
        <Grid.Row>&nbsp;</Grid.Row>
        <Grid.Row>
          <Segment stacked>
            <Header as="h2">
              <Icon circular inverted color="teal" name="home" />
              <Header.Content>
                Log In to your account
              </Header.Content>
            </Header>
            <Form size="large">
              <TextInput
                type="text"
                name="username"
                label="Username"
                value={this.state.credentials.username}
                onChange={this.onChange}/>
              <TextInput
                name="password"
                label="password"
                type="password"
                value={this.state.credentials.password}
                onChange={this.onChange}/>
              <Button primary
                type="submit"
                onClick={this.onSave}>Login</Button>
            </Form>
          </Segment>
        </Grid.Row>
      </Grid>
  )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(LogInPage)
