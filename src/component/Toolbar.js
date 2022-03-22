import React, { Component } from 'react'

export default class Toolbar extends Component {
  render() {
    return (
      <div className='btn-toolbar m-3 p-2 d-flex btn-group-large bg-secondary rounded-2' role='group'>
          <button className='btn btn-info m-2'>JSON</button>
          <button className='btn btn-info m-2'>GML</button>
          <button className='btn btn-info m-2'>db</button>
          <button className='btn btn-info m-2'>print</button>
          <button className='btn btn-info m-2'>map</button>
          <button className='btn btn-info m-2'>search</button>
          <button className='btn btn-info m-2'>info</button>
      </div>
    )
  }
}
