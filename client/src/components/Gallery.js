import React from 'react'
import {
  Container,
  Card,
  Segment,
  Header,
} from 'semantic-ui-react'

class Gallery extends React.Component {
  render() {
    return(
      <div>
        <Header as='h1'>Gallery</Header>
        <Container>
          <Card.Group>
            <Card>
              <Card.Header>job name</Card.Header>
              <Card.Description>what is the job done on</Card.Description>
              <Card.Meta>completion time</Card.Meta>
            </Card>
          </Card.Group>
        </Container>
      </div>
    )
  }
}

export default Gallery
