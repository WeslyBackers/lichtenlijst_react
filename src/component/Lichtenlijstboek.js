import React, { Component } from 'react';
import Inleiding from './Inleiding';
import Lijstderlichten from './Lijstderlichten';
import Notities from './Notities';
import axios from 'axios';

export default class lichtenlijstboek extends Component {
  
  state = {
    nrListOfLight:'',
    data:[],
    exporttime:'',
    upToDateUntilBaz:'',
    year:'',
    zonelist:[]
  }
  
  //get API-data with "axios", raw api-data = 'res'
  componentDidMount() {
    axios.get(`http://192.168.68.62:8080/lichtenlijst`)
      .then(res => {
        //console.log(res);
        const in_data = JSON.parse(res.data);
        //console.log(in_data)
        const data = in_data.features
        this.setState({data});
        
        const exporttime = in_data.exporttime;
        this.setState({exporttime})

        const upToDateUntilBaz = in_data.upToDateUntilBaz;
        this.setState({upToDateUntilBaz});

        const nrListOfLight = in_data.nrListOfLight;
        this.setState({nrListOfLight});

        const year = in_data.year;
        this.setState({year});
       
        //var zonelist = [];
        console.log(data.length);
        //console.log(this.state);
      })
  }
  
  render() {
    return (
      <div className='lichtenlijstboek card m-3 p-2'>
        <h2>Lichtenlijst boek</h2>
        <Inleiding className="new-page"></Inleiding>
        <Lijstderlichten className="new-page" data={this.state.data}></Lijstderlichten>
        <Notities className="new-page"></Notities>
      </div>
    )
  }
}
