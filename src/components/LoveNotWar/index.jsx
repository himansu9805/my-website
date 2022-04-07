import { useState } from "react";
import "./main.css";

function LoveNotWar() {
  const [isOpen, setIsOpen] = useState(true);

  function closeButton() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={isOpen ? `open` : `close`}>
      <p className="peace-text">I stand with peace and love.</p>
      <div onClick={() => closeButton()} className="button">
        x
      </div>
    </div>
  );
}

export default LoveNotWar;
