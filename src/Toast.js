import React, { useState } from "react";
import { FaCross } from "react-icons/fa";
import {GiCrossMark} from 'react-icons/gi'
const Toast = (props) => {
  const { color, toast } = props;
  const [display, setDisplay] = useState("initial");
  const [fade, setFade] = useState("noFade")

  const hide = () => {
    setDisplay("none");
    setFade("fade")
  };

  return (
    <div>
      <div className={`toast ${color}  ${fade}`}>
        <h3>{toast}</h3>
        <span onClick={hide} className={`cross`}><GiCrossMark/></span>
      </div>
    </div>
  );
};

export default Toast;
