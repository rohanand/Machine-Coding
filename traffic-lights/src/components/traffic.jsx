import { useEffect, useState } from "react";
import Signal from "./signal";

export default function Traffic({ ligths = ["green", "yellow", "red"] }) {
  const [active, setActive] = useState(0);
  const [duration, setDuration] = useState(1000);
  useEffect(() => {
    if (active == 0) setDuration(3000);
    else if (active == 1) setDuration(2000);
    else if (active == 2) setDuration(1000);
    console.log("duration: ", duration);
    const intervalId = setInterval(() => {
      setActive((pervActive) => {
        return (pervActive + 1) % ligths.length;
      });
    }, duration);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      {ligths.map((color, index) => {
        return <Signal key={index} isActive={active === index} color={color} />;
      })}
    </>
  );
}
