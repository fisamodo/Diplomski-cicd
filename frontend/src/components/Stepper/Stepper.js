import React, { useState } from "react";
import "./Stepper.css";

const Stepper = ({ currentStep }) => {
  return (
    <div className="stepperAlign">
      <div className={currentStep === 1 ? "current" : "notCurrent"}>O</div>
      <div className={currentStep === 2 ? "current" : "notCurrent"}>O</div>
      <div className={currentStep === 3 ? "current" : "notCurrent"}>O</div>
    </div>
  );
};

export default Stepper;
