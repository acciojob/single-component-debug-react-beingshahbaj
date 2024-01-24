import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isBallVisible, setBallVisibility] = useState(false);
  const [ballPosition, setBallPosition] = useState({ left: 0 });

  const handleStartClick = () => {
    setBallVisibility(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      setBallPosition((prevPosition) => ({ left: prevPosition.left + 5 }));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); 

  return (
    <div>
      {!isBallVisible && (
        <button className="start" onClick={handleStartClick}>
          Start
        </button>
      )}
      {isBallVisible && (
        <div
          className="ball"
          style={{
            position: "absolute",
            left: ballPosition.left + "px",
          }}
        ></div>
      )}
    </div>
  );
};

export default App;
