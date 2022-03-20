import React, { Component } from 'react';
import Inleiding from './Inleiding';
import Lijstderlichten from './Lijstderlichten';
import Notities from './Notities';

export default class lichtenlijstboek extends Component {
  render() {
    return (
      <div className='card m-3 p-2'>
        <h2>Lichtenlijst boek</h2>
        <Inleiding></Inleiding>
        <Lijstderlichten></Lijstderlichten>
        <Notities></Notities>
      </div>
    )
  }
}
