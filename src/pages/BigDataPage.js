import React, { useState } from "react";
import ColorCanvas from "../components/big-data/ColorCanvas";

export default function BigDataPage() {
  const [show, setShow] = useState(false);
  const [btnShow, setBtnShow] = useState(true);
  const handleClick = () => {
    setBtnShow(false);
    setTimeout(() => {
      setShow(true);
    }, []);
  };
  return (
    <div>
      {btnShow && <button onClick={handleClick}>show</button>}
      {show && <ColorCanvas />}
    </div>
  );
}
