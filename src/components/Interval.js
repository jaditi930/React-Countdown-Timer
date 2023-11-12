import { useState, useEffect, useRef } from "react";

export default function Interval() {
  const initalState = 0;
  const [count, setCount] = useState(initalState);
  const counterRef = useRef(initalState);

  useEffect(() => {
    counterRef.current = count;
  })

  useEffect(() => {
    setInterval(() => {
      setCount(counterRef.current + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>The current count is:</h1>
      <h2>{count}</h2>
    </div>
  )
}