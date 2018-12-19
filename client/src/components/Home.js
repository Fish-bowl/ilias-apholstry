import React, { Component } from 'react';
import { 
  Header,
  Container,
  Segment,
  Grid,
  Rail,
} from 'semantic-ui-react';
import Logo from './Logo'
import Feed from './CustomerFeed'

class Home extends Component {
  render() {
    return (
      <Container>
        {/* <Rail style={styles.dev.leftRail} >
          <Segment><p>these are your costumer reviews</p></Segment>
        </Rail>
        <Rail float='right' style={styles.dev.rightRail} >
          <Segment><p>this is your bio</p></Segment>
        </Rail> */}
        <Grid>
          <Grid.Row columns='3'>
            <Grid.Column style={styles.dev.logo} >
              <Logo />
            </Grid.Column>
            <Grid.Column style={styles.dev.column} >
              <Segment style={styles.dev.slideshow} inverted >
                <p>this is a random image gallery</p>
              </Segment>
            </Grid.Column>
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
              <Segment style={styles.dev.feed} inverted>
                <Feed />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={styles.dev.row} >
            <Segment inverted>
              <p>
                In laboris aute exercitation sit Lorem. Nulla aute ea sit anim labore sint deserunt laboris. Sunt ea nisi est quis nulla minim nisi tempor fugiat nostrud et. Nisi et qui tempor ea irure. Esse laboris Lorem aliquip proident velit minim voluptate ullamco nulla.
                \n
                Pariatur commodo enim qui laborum irure esse exercitation pariatur laborum in velit ea consequat.
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
    feed: {
      height: '200px',
      width: '100px'
    }, 
    // logo: {
    //   height: '600px',
    //   width: '100vw'
    // },

    // logo: {
    //   height: '300px',
    //   width: '300px',

    // },
    // header: {
    //   border: 'red 3px solid',
    //   height: '100px'
    // },
    // leftRail: {
    //   zIndex: '1',
    //   position: 'fixed',
    //   top: '85%'
    // },
    // rightRail: {
    //   zIndex: '1',
    //   position: 'fixed',
    //   top: '75%',
    // },
    // column: {
    //   display: 'flex',
    //   justifyContent: 'center',
    // },
    // row: {
    //   border: 'red 3px solid',
    //   display: 'flex',
    //   justifyContent: 'center',
    // },
    // twoBoxRow: {
    //   border: 'red 3px solid',
    //   display: 'flex',
    //   justifyContent: 'space-around',
    // },
    // slideshow: {
    //   border: 'red 3px solid',
    //   height: '450px',
    //   width: '66%',
    // }
  }
  
}

export default Home;
