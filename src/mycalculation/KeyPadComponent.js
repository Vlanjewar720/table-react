import React, { Component } from 'react';

class KeyPadComponent extends Component { 
    render() {
    
    return (
  
    //    < className='calculator'>
     <form>
        
        <input type="button" name="CE" value="CE" onClick={e => this.props.onClick(e.target.name)} />  
        <input type="button" name="C" value="C" onClick={e => this.props.onClick(e.target.name)} />  
        <input type="button" name="(" value="(" onClick={e => this.props.onClick(e.target.name)} />
        <input type="button" name=")" value=")" onClick={e => this.props.onClick(e.target.name)} /> 

        <br />

        <input type="button" name="1" value="1" onClick={e => this.props.onClick(e.target.name)} />  
        <input type="button" name="2" value="2" onClick={e => this.props.onClick(e.target.name)} />  
        <input type="button" name="3" value="3" onClick={e => this.props.onClick(e.target.name)} /> 
        <input type="button" name="/" value="/" onClick={e => this.props.onClick(e.target.name)} />  

        <br />

        <input type="button" name="4" value="4" onClick={e => this.props.onClick(e.target.name)} />  
        <input type="button" name="5" value="5" onClick={e => this.props.onClick(e.target.name)} />  
        <input type="button" name="6" value="6" onClick={e => this.props.onClick(e.target.name)} />  
        <input type="button" name="*" value="*" onClick={e => this.props.onClick(e.target.name)} />  

        <br />
        
        <input type="button" name="7" value="7" onClick={e => this.props.onClick(e.target.name)} />  
        <input type="button" name="8" value="8" onClick={e => this.props.onClick(e.target.name)} />  
        <input type="button" name="9" value="9" onClick={e => this.props.onClick(e.target.name)} /> 
        <input type="button" name="-" value="-" onClick={e => this.props.onClick(e.target.name)} /> 

       <br />
        
        <input type="button" name="0" value="0" onClick={e => this.props.onClick(e.target.name)} />  
        <input type="button" name="." value="." onClick={e => this.props.onClick(e.target.name)} />  
        <input type="button" name="=" value="=" onClick={e => this.props.onClick(e.target.name)} />
        <input type="button" name="+" value="+" onClick={e => this.props.onClick(e.target.name)} />   

     </form>   
     
    )
  }
}

export default KeyPadComponent;