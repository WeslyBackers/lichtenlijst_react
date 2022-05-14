import React, { Component } from 'react'
import Notitielijn from './Notitielijn'


export default class Notities extends Component {

  render() {
    //amount of lines
    var lines = [];
    for(let i = 0; i < 24; i++){
      lines.push(<Notitielijn></Notitielijn>);    
    }
      return (
        <div className='notities new-page'>
          <h3 className='card m-3 p-2'>Notities</h3>
          {lines}
        </div>
    )
  }
}
