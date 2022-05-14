import React, { Component } from 'react';

export default class Toolbutton extends Component {

    constructor(props) {
        super(props);
        this.state = {function:this.props.function};
        console.log(this.state.function)  
    }
      
  render() {
    return (
        <div>
            <button className='btn btn-info m-2' 
            name={this.props.name} 
            index={this.props.id} 
            function={String(this.props.function)} 
            onclick={this.props.function} >
              {this.props.name}
            </button>
        </div>
    );
  }
}
