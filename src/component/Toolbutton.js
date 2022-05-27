import React, { Component } from 'react';
import '../component_css/Toolbutton.css';

export default class Toolbutton extends Component {

    constructor(props) {
        super(props);
        this.state = {function:String(this.props.function),
                      visible:true};

    }

      
  render() {

    console.log(this.props);

    return (
        <div className='Toolbutton'>
            <button className='btn btn-secondary m-2 border-start border-top' 
                    type="button"
                    name={this.props.name} 
                    key={this.props.key}
                    index={this.props.id}  
                    data-bs-toggle={this.props.data_bs_toggle} 
                    data-bs-target={this.props.data_bs_target}  
                    aria-controls={this.props.aria_controls} 
                    aria-expanded={this.props.aria_expanded}
                 >
                  {this.props.name}
            </button>
        </div>
    );
  }
}
