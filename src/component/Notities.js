import React, { Component } from 'react'
import Notitielijn from './Notitielijn'

export default class Notities extends Component {
  render() {
    return (
      <div>
        <h3 className='card m-3 p-2'>Notities</h3>
        <Notitielijn></Notitielijn>
      </div>
    )
  }
}
