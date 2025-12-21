import { useEffect, useState } from "react";
import ProgressBar from "./components/progress";
import "./index.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => Math.min(100, val + 0.1));
    }, 2);
  }, []);
  console.log("val: ", value);
  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
}
