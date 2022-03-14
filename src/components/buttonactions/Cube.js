import React from "react";
// import { cube } from "mathjs";

const Cube = (props) => {
  const findCube = (event) => {
    event.preventDefault();
    try {
      props.cubevars.setInputData((prev) => "("  + prev + ")^3");
    } catch (err) {
      //  console.log(err);
      props.cubevars.setAnswer(err.message);
    }
  };

  return (
    <>
      <button type="submit" className="btn btn-danger m-1" onClick={findCube}>
        x<sup>3</sup>
      </button>
    </>
  );
};

export default Cube;
