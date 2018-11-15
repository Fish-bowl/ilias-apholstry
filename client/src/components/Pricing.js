import React from 'react'
import {
  Container,
  Segment,
  Header,
} from 'semantic-ui-react'
export default () =>
  <div>
    <Header textAlign='center' as='h1'>this is all your pricing</Header>
    <Container>
      <Segment>
        <h1>some flat rate in shop pricing</h1>
      </Segment>
      <Segment>
        <h1>some flat rate on site pricing</h1>
      </Segment>
      <Segment>
        <h1>material look book</h1>
      </Segment>
      <Segment>
        <h1>maybe some ready to go products</h1>
      </Segment>
    </Container>
  </div>

const styles = {
  container: {
    
  },
}
