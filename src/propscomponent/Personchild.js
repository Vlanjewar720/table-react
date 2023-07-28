import React, { Component } from 'react'

 class Personchild extends Component {
  constructor(props){
    super(props);
    this.props=props;
    this.state= {
      name:'Rajesh '
    }
  }
   nameHandler() {
    this.setState ({
       name : 'Rohan '   
    
    } );
  
  };
  render() {
    return(
      <div>
        <h3 style={{color: 'red'}}>Dear {this.props.name} and {this.state.name} Welcome To Axiom Tech Guru Private Limited</h3>
        <button onClick={()=> this.nameHandler()}> change name</button>
      </div>
    )
  }
}
export default Personchild;
