import React from 'react'
import {TextChanger, NavBar} from '../containers/'
import {Header} from '../presentations/'

class Home extends React.Component {

  render() {
    return (
      <div>
        <NavBar/>
        <Header/>
        <TextChanger/>
      </div>
    )
  }
}

export default Home;
