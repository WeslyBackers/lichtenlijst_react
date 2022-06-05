import React, { Component } from 'react'
import Tabeltitels from './Tabeltitels'
//import Zonetabel from './Zonetabel'

export default class Lijstderlichten extends Component {


  render() {
    return (
      <div className='lijstderlichten card m-3 p-2'>
        <h3>Lijst der lichten</h3>
        <Tabeltitels></Tabeltitels>
      </div>
    )
  }
}
