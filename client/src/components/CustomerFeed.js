import React from 'react'
import {
  Feed
} from 'semantic-ui-react'


class CostumerFeed extends React.Component{
  events = [
    {
      date: '10/10/10',
      image: '',
      text: 'asasdfasfasf'
    },
    {
      date: '24/25/24',
      image: '',
      text: 'asdfasdf'
    }
  
  ]
  render() {
    return(
      <Feed events={this.events} />
    )
  }
}

export default CostumerFeed
