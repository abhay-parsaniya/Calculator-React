import React from "react";

const ClearAll = (props) => {
  const clearAll = () => {
    props.clearallvars.setInputData("");
    props.clearallvars.setAnswer("");
  };

  return (
    <>
      <button type="submit" className="btn btn-danger m-1" onClick={clearAll}>
        C
      </button>
    </>
  );
};

export default ClearAll;
