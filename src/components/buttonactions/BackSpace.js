import React from "react";

const BackSpace = (props) => {
  const backSpace = (event) => {
    props.backspacevars.setInputData(props.backspacevars.inputData.slice(0, props.backspacevars.inputData.length - 1));
    event.preventDefault();
  };
  return (
    <>
      <button
        type="submit"
        className="btn btn-danger m-1"
        onClick={backSpace}
      >
        ⌫
      </button>
    </>
  );
};

export default BackSpace;
