import React, { Component } from 'react';

export default class Tabeltitels extends Component {
  render() {
    return (
      <div className='table-responsive-xl  bd-highlight sticky fixed'>
        <table className='table'>
        <thead>
            <tr>
                <th className=' text-center'>VOLGNR.</th>
                <th className='col text-center'>PLAATS-NAAM</th>
                <th className='col text-center'>POSITIE-GEO</th>
                <th className='col text-center'>LICHT- EN MISTSEIN</th>
                <th className='col text-center'>HOOGTE</th>
                <th className='col text-center'>DRACHT</th>
                <th className='col text-center'>BESCHRIJVING</th>
                <th className='col text-center'>VERDERE GEGEVENS</th>
            </tr>
            <tr>
                <th className='col text-center'>(1)</th>
                <th className='col text-center'>(2)</th>
                <th className='col text-center'>(3)</th>
                <th className='col text-center'>(4)</th>
                <th className='col text-center'>(5)</th>
                <th className='col text-center'>(6)</th>
                <th className='col text-center'>(7)</th>
                <th className='col text-center'>(8)</th>
            </tr>
        </thead>
        </table>
      </div>
    )
  }
}
