import { memo } from "react";

const Content = ({ incrementCount }) => {
  console.log("re-render - Content");
  return (
    <div>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
};

export default memo(Content);
