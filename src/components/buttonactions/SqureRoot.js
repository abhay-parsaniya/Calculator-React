import React from "react";
// import { sqrt } from "mathjs";

const SqureRoot = (props) => {
  const squreRoot = (event) => {
    event.preventDefault();
    try {
      props.squrerootvars.setInputData((prev) => "("  + prev + ")^(1/2)");
    } catch (err) {
      //  console.log(err);
      props.squrerootvars.setAnswer(err.message);
    }
  };
  return (
    <>
      <button type="submit" className="btn btn-danger m-1" onClick={squreRoot}>
        <sup>2</sup>√x
      </button>
    </>
  );
};

export default SqureRoot;
