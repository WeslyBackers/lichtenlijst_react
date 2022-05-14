import React, { Component } from 'react'
import Toolbutton from './Toolbutton';
import '../component_css/Toolbar.css';

export default class Toolbar extends Component {

  render() {
    var buttonnames = [
    {'caption':'JSON','function':'openJsonFile()'},
    {'caption':'GML','function':'openGmlFile()'},
    {'caption':'Map','function':'openMap()'},
    {'caption':'Print','function':'print()'},
    {'caption':'Info','function':'openInfo()'},
    {'caption':'Workflow','function':'openWorkflow()'}
  ];
    var buttons = [];
    buttonnames.forEach((item,index)=>{
      buttons.push(
      <Toolbutton name={item.caption} id={item.index} function={item.function}>
        {item.caption}
      </Toolbutton>)
    })
    return (
      <div className='toolbar btn-toolbar m-3 p-2 d-flex btn-group-large rounded-2' role='group'>
        {buttons}
      </div>
    )
  }
}
