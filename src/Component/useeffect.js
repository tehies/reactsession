import React from "react";
import { useState, useEffect } from "react";


const  Timer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);
  });

  return(
  <h1>I have rendered {count} times!</h1>
  );
}
export default Timer;

