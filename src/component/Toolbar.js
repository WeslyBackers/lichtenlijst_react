import React, { Component } from 'react'

export default class Toolbar extends Component {
  render() {
    return (
      <div className='btn-toolbar m-3 p-2 d-flex btn-group-large' role='group'>
          <button>*Json</button>
          <button>*gml</button>
          <button>db</button>
          <button>print</button>
          <button>map</button>
          <button>search</button>
          <button>info</button>
      </div>
    )
  }
}
