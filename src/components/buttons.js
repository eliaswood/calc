import calc from '../calc.css';
import React from 'react';


class Buttons extends React.Component {
  state= {
    lfthnd: ''
  }

  renderNumState= (name) => {
    this.setState({
     lfthnd: this.state.lfthnd + name
   });
  }
  renderCalcState= () => {
    this.setState({
      lfthnd: (eval(this.state.lfthnd) || '') + ''
    })
  }

  resetState = () => {
    this.setState({
     lfthnd: ''
   });
  }
  backspaceState = () => {
    this.setState({
      lfthnd: this.state.lfthnd.slice(0,-1)
    })
  }

  render() {
    return (
      <div className='calculator-body'>
        <div className='result'>
          <p>{this.state.lfthnd}</p>
        </div>

        <div className='buttons'>
          <button name='7' onClick={(e)=>this.renderNumState(e.target.name)}>7</button>
          <button name='8' onClick={(e)=>this.renderNumState(e.target.name)}>8</button>
          <button name='9' onClick={(e)=>this.renderNumState(e.target.name)}>9</button>
          <button name='*' onClick={(e)=>this.renderNumState(e.target.name)}>x</button>
        </div>

        <div>
          <button name='4' onClick={(e)=>this.renderNumState(e.target.name)}>4</button>
          <button name='5' onClick={(e)=>this.renderNumState(e.target.name)}>5</button>
          <button name='6' onClick={(e)=>this.renderNumState(e.target.name)}>6</button>
          <button name='7' onClick={(e)=>this.renderNumState(e.target.name)}>-</button>
        </div>

        <div>
          <button name='1' onClick={(e)=>this.renderNumState(e.target.name)}>1</button>
          <button name='2' onClick={(e)=>this.renderNumState(e.target.name)}>2</button>
          <button name='3' onClick={(e)=>this.renderNumState(e.target.name)}>3</button>
          <button name='+' onClick={(e)=>this.renderNumState(e.target.name)}>+</button>
        </div>

        <div>
          <button onClick={()=>this.resetState()}>AC</button>
          <button name='0' onClick={(e)=>this.renderNumState(e.target.name)}>0</button>
          <button name='back' onClick={()=>this.backspaceState()}>back</button>
          <button name='=' onClick={()=>this.renderCalcState()}>=</button>
        </div>
      </div>
    )
  }
}; export default Buttons
