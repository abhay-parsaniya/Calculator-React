import React from "react";
// import { cbrt } from "mathjs";

const CubeRoot = (props) => {
  const cubeRoot = (event) => {
    event.preventDefault();
    try {
      props.cuberootvars.setInputData((prev) => "("  + prev + ")^(1/3)");
    } catch (err) {
      //  console.log(err);
      props.cuberootvars.setAnswer(err.message);
    }
  };
  return (
    <>
      <button type="submit" className="btn btn-danger m-1" onClick={cubeRoot}>
      <sup>3</sup>√x
      </button>
    </>
  );
};

export default CubeRoot;
