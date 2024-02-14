import React, { Component } from 'react'

class Greet extends Component {
  render() {
    return (
      <div>
        <center>
       <h1> Greetigs {this.props.name}  {this.props.id}</h1>

         </center>
      </div>
    )
  }
}
export default Greet