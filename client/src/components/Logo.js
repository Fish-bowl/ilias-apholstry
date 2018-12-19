import React from 'react'
import LogoJPG from '../images/IMG_1347.JPG'

class Logo extends React.Component{
  render(){
    return(
      <img src={LogoJPG} style={styles.background} />
    )
  }
}

const styles = {
  background: {
    width: '300px',
    height: '300px',

  }
}

export default Logo
