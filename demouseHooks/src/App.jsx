import { useState } from "react";
import "./App.css";
import CountDown from "./hooks/CountDown";
import Counter from "./hooks/Counter";
import FetchData from "./hooks/FetchData";
import Total from "./hooks/Total";
import UploadForm from "./hooks/UploadFile";
function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {/* <button onClick={handleToggle}>Toggle</button> */}
      {/* <Counter /> */}
      {/* <FetchData /> */}
      {/* <Total/> */}
      {/* {toggle && <CountDown />} */}
      {/* <UploadForm/> */}

    </>
  );
}

export default App;
