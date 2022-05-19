import React, { Component } from 'react';
import Objectinformatie from './Objectinformatie';

import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';

import '../component_css/Map.css';
import '../component_css/Objectinformatie.css';
export default class Map extends Component {

  render() {

    var position = [51.30, 3.25]

    return (
      <div className='map m-3 p-2 row d-print-none collapse show' id="collapseExample">
        <MapContainer className='card p-2 border-end border-2 rounded-2 col' center={position} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openseamap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <Objectinformatie className='objectinformatie' ></Objectinformatie>
      </div>
    )
  }
}


