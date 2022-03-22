import React, { Component } from 'react'
import Tabeltitels from './Tabeltitels'

export default class Lijstderlichten extends Component {
  render() {
    return (
      <div className='card m-3 p-2'>
        <h3>Lijst der lichten</h3>
        <Tabeltitels></Tabeltitels>
      </div>
    )
  }
}
