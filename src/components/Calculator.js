import React, { useState } from "react";
import "./Calculator.css";
import CalculatorForm from "./CalculatorForm";

const Calculator = () => {
  const [inputData, setInputData] = useState("");   // Storing Input Value in State
  const [answer, setAnswer] = useState("");   // Storing Result in State

  return (
    <>
      {/* Pass State as Props */}
      <CalculatorForm vars={{ inputData, setInputData, answer, setAnswer }} />
    </>
  );
};

export default Calculator;
