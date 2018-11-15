import React, { Component } from 'react';
import { 
  Header,
  Container,
  Segment,
  Grid,
} from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns='1' >
          <Grid.Column>
            <Header style={styles.dev.header} textAlign='center' as='h1' >this is logo</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns='2' style={styles.dev.secondRow} >
          <Container>
            <Grid.Column width='6' >
              <Segment inverted ><p>this is a bio</p></Segment>
            </Grid.Column>
            <Grid.Column width='6' >
              <Segment  inverted ><p>these are costumer testimonys</p></Segment>
            </Grid.Column>
          </Container>
        </Grid.Row>
      </Grid>
    );
  }
}

const styles = {
  dev: {
    header: {
      border: 'red 3px solid',
    },
    secondRow: {
      border: 'red 3px solid',
      display: 'flex',
      justifyContent: 'space-around'
    },
    slideshow: {
      border: 'red 3px solid',
    }
  }
  
}

export default Home;
