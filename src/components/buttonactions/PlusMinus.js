import React from 'react';

const PlusMinus = (props) => {

    const plusminus = (event) => {
        event.preventDefault();
        try {
            if(props.plusminusvars.inputData.charAt(0) === "+")
            {
                props.plusminusvars.setInputData((prev) => "-"  + prev.slice(1, prev.length));
            }
            else if(props.plusminusvars.inputData.charAt(0) === "-")
            {
                props.plusminusvars.setInputData((prev) => "+"  + prev.slice(1, prev.length));
            }
            else{
                props.plusminusvars.setInputData((prev) => "-"  + prev);
            }
        } catch (err) {
        //  console.log(err);
            props.plusminusvars.setAnswer(err.message);
        }
    };

  return (
    <>
        <button type="button" className="btn btn-secondary m-1" onClick={plusminus}>+/-</button>
    </>
  );
};

export default PlusMinus;