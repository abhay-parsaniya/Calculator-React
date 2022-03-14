import React from "react";
import {evaluate} from "mathjs";

const Calculate = (props) => {
  const calculate = (event) => {   // Evatuate All Functions
    event.preventDefault();
    try {
      props.calculatevars.setAnswer(evaluate(props.calculatevars.inputData).toString());
    } catch (err) {
      //  console.log(err);
      props.calculatevars.setAnswer(err.message);
    }
  };

  return (
    <>
      <button type="submit" className="btn btn-danger px-4 m-1" onClick={calculate}>
        =
      </button>
    </>
  );
};

export default Calculate;
