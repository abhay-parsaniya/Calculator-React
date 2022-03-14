import React from "react";
// import { square } from "mathjs";

const Squre = (props) => {
  const squre = (event) => {
    event.preventDefault();
    try {
      props.squrevars.setInputData((prev) => "("  + prev + ")^2");
    } catch (err) {
      //  console.log(err);
      props.squrevars.setAnswer(err.message);
    }
  };
  return (
    <>
      <button type="submit" className="btn btn-danger m-1" onClick={squre}>
        x<sup>2</sup>
      </button>
    </>
  );
};

export default Squre;
