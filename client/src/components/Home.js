import React, { Component } from 'react';
import { 
  Header,
  Container,
  Segment,
  Grid,
  Rail,
} from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header 
          style={styles.dev.header} 
          textAlign='center' 
          as='h1' 
        >
          this is logo
        </Header>
        {/* <Rail style={styles.dev.leftRail} >
          <Segment><p>these are your costumer reviews</p></Segment>
        </Rail>
        <Rail float='right' style={styles.dev.rightRail} >
          <Segment><p>this is your bio</p></Segment>
        </Rail> */}
        <Grid>
          <Grid.Row columns='1'>
            <Grid.Column style={styles.dev.column} >
              <Segment style={styles.dev.slideshow} inverted >
                <p>this is a random image gallery</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns='2' style={styles.dev.twoBoxRow} >
            <Grid.Column width='4' >
              <Segment compact inverted>
                <p>this is a bio</p>
              </Segment>
            </Grid.Column>
            <Grid.Column width='4' >
              <Segment compact inverted>
                <p>these are costumer testimonys</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={styles.dev.row} >
            <Segment inverted >
              <p>
                this will be a very personal testimony of why I should buy your product
              </p>
            </Segment>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const styles = {
  dev: {
    header: {
      border: 'red 3px solid',
      height: '100px'
    },
    leftRail: {
      zIndex: '1',
      position: 'fixed',
      top: '85%'
    },
    rightRail: {
      zIndex: '1',
      position: 'fixed',
      top: '75%',
    },
    column: {
      display: 'flex',
      justifyContent: 'center',
    },
    row: {
      border: 'red 3px solid',
      display: 'flex',
      justifyContent: 'center',
    },
    twoBoxRow: {
      border: 'red 3px solid',
      display: 'flex',
      justifyContent: 'space-around',
    },
    slideshow: {
      border: 'red 3px solid',
      height: '450px',
      width: '66%',
    }
  }
  
}

export default Home;
