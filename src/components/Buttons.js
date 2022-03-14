import React from 'react';
import ClearAll from './buttonactions/ClearAll';
import BackSpace from './buttonactions/BackSpace';
import Calculate from './buttonactions/Calculate';
import Squre from './buttonactions/Squre';
import SqureRoot from './buttonactions/SqureRoot';
import Cube from './buttonactions/Cube';
import CubeRoot from './buttonactions/CubeRoot';
import PlusMinus from './buttonactions/PlusMinus';
import Inverse from './buttonactions/Inverse';
import Factorial from './buttonactions/Factorial';
import "./Calculator.css";

const Buttons = (props) => {

  const InputEvent = (event) => {
    // console.log(event.target.innerText);
    props.vars.setInputData((prev) => {
      return prev + `${event.target.innerText}`;   // Buttons Value Reading
    });
  };

  return (
    <>
        <div className='All-Btn'>
          <ClearAll clearallvars={props.vars}  />
          <BackSpace backspacevars={props.vars} />
          <Factorial factorialvars={props.vars} />
          <Inverse inversevars={props.vars} />
          <Cube cubevars={props.vars} />
          <CubeRoot cuberootvars={props.vars} />
          <Squre squrevars={props.vars} />
          <SqureRoot squrerootvars={props.vars} />
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent} >(</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent} >)</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent} >%</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>/</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>7</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>8</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>9</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>*</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>4</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>5</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>6</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>-</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>1</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>2</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>3</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>+</button>
          <PlusMinus plusminusvars={props.vars} />
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>0</button>
          <button type="button" className="btn btn-secondary m-1" onClick={InputEvent}>.</button>
          <Calculate calculatevars={props.vars} />
        </div>
    </>
  );
};

export default Buttons;