import React, { Component } from 'react'
import Toolbutton from './Toolbutton';
import '../component_css/Toolbar.css';

export default class Toolbar extends Component {

  render() {
    var buttonnames = [
    {'caption':'JSON','function':'openJsonFile()'},
    {'caption':'GML','function':'openGmlFile()'},
    {'caption':'Kaart','function':'openMap','data_bs_toggle':'collapse','data_bs_target':'#collapseExample','aria_controls':'collapseExample','aria_expanded':'true'},
    {'caption':'Print','function':'print()'},
    {'caption':'Info','function':'openInfo()'},
    {'caption':'Werkwijze','function':'openWorkflow()'},
    {'caption':'Geschiedenis','function':'getHistory()'}
  ];
    var buttons = [];
    buttonnames.forEach((item,index)=>{
      buttons.push(
      <Toolbutton name={item.caption} id={item.index} function={item.function} data_bs_toggle={item.data_bs_toggle} data_bs_target={item.data_bs_target} aria_controls={item.aria_controls} aria_expanded={item.aria_expanded}>
        {item.caption}
      </Toolbutton>)
    })
    return (
      <div className='toolbar btn-toolbar p-2 d-flex btn-group-large d-print-none' role='group'>
        {buttons}
      </div>
    )
  }
}
