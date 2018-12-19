import React from 'react'
import LogoJPG from '../images/IMG_1347.JPG'

class Logo extends React.Component{
  render(){
    return(
      <img src={LogoJPG}  />
    )
  }
}

const styles = {
  background: {
    width: '1000px',
    height: 'auto',

  }
}
// style = { styles.background }

export default Logo
