import React from 'react'

const Factorial = (props) => {
    const factorial = (event) => {
        event.preventDefault();
        props.factorialvars.setInputData((prev) => {
            return "(" + prev + ")!";
        });
    }
  return (
    <>
        <button type="submit" className="btn btn-danger m-1" onClick={factorial}>
            !
        </button>
    </>
  )
}

export default Factorial