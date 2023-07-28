import React,{Component} from 'react'
class Calculation extends Component{
    constructor(props) {
        super(props);
        this.state={
            number1:0,
            number2:0,
            result:''
        }
    }
    Add=()=>{
        
        this.setState({
            
     result:parseInt(this.state.number1,10)+parseInt(this.state.number2,10) 
        })
    }
    Sub=()=>{
        this.setState({
            result:parseInt(this.state.number1,10)-parseInt(this.state.number2,10)
        })
    }
    Mul=()=>{
        this.setState({
            result:parseInt(this.state.number1,10)*parseInt(this.state.number2,10)
        })
    }
    Div=()=>{
        this.setState({
            result:parseInt(this.state.number1,10)/parseInt(this.state.number2,10)
        })
    }
    Clear=()=>{
        this.setState({

            result:''
        })
    }

    render(){
        return(
             <div className='' style={{background: 'LightGray', height: '700px',width:'100%'}}>
               <div className='container text-center justify-content-center bg-info border rounded shadow ' style={{background: 'LightGray', height: '500px'}}>
                <form className='text-center justify-content-center align-item-center border mx-auto w-50 rounded shadow' style={{background: 'wheat'}}>
                  <div className='row text-center justify-content-center d-flex mt-3' >  
                     <h3>ARITHMATIC CALCULATION</h3>

                    <div className='col-md-4 mt-3 '>
                        <input type='number' placeholder='First Number' className='form-control' onChange={(e)=>this.setState({number1:e.target.value})} />
                    </div>
                    <div className='col-md-4 mt-3  '>
                        <input type='number' placeholder='Second Number' className='form-control'  onChange={(e)=>this.setState({number2:e.target.value})} />
                    </div>
                       
                 </div>
                 <div className='row justify-content-center d-flex mt-4'>
                    <div className='col-md-2 '>
                       <button type='button' className='btn btn-success' onClick={this.Add} >+ Add</button>
                    </div> 
                    <div className='col-md-2 ' >
                       <button type='button' className='btn btn-success' onClick={this.Sub} >- Sub</button>
                    </div> 
                    <div className='col-md-2'>
                       <button type='button' className='btn btn-success' onClick={this.Mul} >* Mul</button>
                    </div> 
                    <div className='col-md-2'>
                       <button type='button' className='btn btn-success' onClick={this.Div} >/ Div</button>
                    </div>   
                 </div> 
                 <div className='row justify-content-center mt-4 my-5'>
                 <div className='col-md-6'>
                       <input type='text' className='form-control' placeholder='Show Result' value={this.state.result} />
                    </div> 
                    <div className='col-md-2 '>
                       <button type='button' className='btn btn-danger'onClick={this.Clear} > Clear </button>
                    </div>   
                    
                  </div>   
                </form>
            </div>
            </div>
        )
    }
}
export default Calculation;
