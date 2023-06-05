import { useCallback, useState } from "react";

import Content from "./Content";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    // chưa đạt
    setCount((prevCount) => prevCount + 1);
  }
  
  return (
    <div>
      <h3>Counter with useState</h3>
      <p>You clicked {count} times</p>
      {/* <button onClick={incrementCount}>Click me</button> */}

      {/* useCallback */}
      <Content incrementCount={incrementCount} />
    </div>
  );
};

export default Counter;
