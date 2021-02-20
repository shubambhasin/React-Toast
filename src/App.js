import React, { useState } from "react";
import "./styles.css";
import Toast from "./Toast";

export default function App() {
  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);

  const showRed = () => {
    setRed(!red);
    console.log("Show red");
    setGreen(false);
    setBlue(false);
  };
  const showGreen = () => {
    setRed(false);
    setGreen(!green);
    console.log("Show green");
    setBlue(false);
  };
  const showBlue = () => {
    setRed(false);
    setGreen(false);
    setBlue(!blue);
    console.log("Show blue");
  };

  return (
    <div>
      <div className="main">
        <button className="btnRed" onClick={showRed}>
          Red
        </button>
        <button className="btnGreen" onClick={showGreen}>
          Green
        </button>
        <button className="btnBlue" onClick={showBlue}>
          Blue
        </button>
      </div>
      {red ? <Toast color="red" toast={`Something went wrong! 😵😵`} /> : ""}
      {green ? <Toast color="green" toast="Well Done ! 😋😋" /> : ""}
      {blue ? <Toast color="blue" toast="I am too cool color 😎😎" /> : ""}
    </div>
  );
}
