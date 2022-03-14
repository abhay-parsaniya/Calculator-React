import React from 'react';

export const Inverse = (props) => {
    const inverse = (event) => {
        event.preventDefault();
        try {
            props.inversevars.setInputData((prev) => "1/("  + prev + ")");
        } catch (err) {
            //  console.log(err);
            props.inversevars.setAnswer(err.message);
        }
    };
  return (
    <>
        <button type="submit" className="btn btn-danger m-1" onClick={inverse}>
            1/x
        </button>
    </>
  );
};

export default Inverse;