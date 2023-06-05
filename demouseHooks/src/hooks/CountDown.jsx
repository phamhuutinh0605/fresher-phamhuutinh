import { useEffect, useState } from "react";

const CountDown = () => {
  const [countDown, setCountDown] = useState(180);
  useEffect(() => {
    const interval=setInterval(() => {
      setCountDown((prev) => prev - 1);
      console.log("Countdown...")
    }, 1000);
    // return()=>{
    //   clearInterval(interval)
    // }
  }, []);
  return (
    <div>
      <h3>CountDown - Cleanup Function</h3>
      <p>{countDown}</p>
    </div>
  );
};

export default CountDown;
