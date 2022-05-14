import React, { Component } from 'react';
import Inleiding from './Inleiding';
import Lijstderlichten from './Lijstderlichten';
import Notities from './Notities';
import axios from 'axios';

export default class lichtenlijstboek extends Component {
  
  state = {
    data:[]
  }
  
  //get API-data with "axios"
  componentDidMount() {
    axios.get(`https://vhlichtenlijst.free.beeceptor.com/VH/api/data`)
      .then(res => {
        const data = res;
        this.setState({data});
        console.log(this.state.data.data.features);
      })
      
  }
  
  render() {
    return (
      <div className='lichtenlijstboek card m-3 p-2'>
        <h2>Lichtenlijst boek</h2>
        <Inleiding className="new-page"></Inleiding>
        <Lijstderlichten className="new-page"></Lijstderlichten>
        <Notities className="new-page"></Notities>
      </div>
    )
  }
}
