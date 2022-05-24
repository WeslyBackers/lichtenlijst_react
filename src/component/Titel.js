import React, { Component } from 'react';
import '../component_css/Titels.css';

export default class Titel extends Component {
  render() {
    return (
      <div className='titel card m-3 text-center d-print-none sticky-top visually-hidden'>
        <h1>Belgische Lichtenlijst</h1>
      </div>
    )
  }
}
