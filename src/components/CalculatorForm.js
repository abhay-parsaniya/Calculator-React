import React from 'react';
import Buttons from './Buttons';

const CalculatorForm = (props) => {
    // console.log(vars);
    const handleChange = (object) => {
        props.vars.setInputData(() => object.target.value);   // Reading One By One Value in Text Box
    };
  return (
    <>
      {/* Input Form */}
      <div className="main-div container-fluid">
        <div className="row">
          <div className="card text-dark bg-info mb-3">
            <div className="card-header h3 text-center">Calculator</div>
            <div className="card-body">
              <form>
                <div className="mb-3 mx-2">
                  <label className="form-label">Expression : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputNumber1"
                    value={props.vars.inputData}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Result : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInpuResult"
                    value={props.vars.answer}
                    readOnly
                  />
                </div>
                <Buttons vars={props.vars} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorForm;