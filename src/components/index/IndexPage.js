import React from 'react'
import {Link} from 'react-router'
import { Grid, Container, Header, Icon, Image } from 'semantic-ui-react'

class IndexPage extends React.Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Header as="h2" icon textAlign="center">
              <Icon name="users" circular />
              <Header.Content>
                Welcome to Main page
              </Header.Content>
              <p>Simple app with redux (semantic-ui) and auth</p>
              <Link to="login" className="btn btn-primary btn-lg">log in as a test user</Link>
            </Header>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default IndexPage
