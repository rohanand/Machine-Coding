import { useEffect, useState } from "react";

export default function Progress({ value = 0, onComplete = () => {} }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, value));

    if (value >= 100) {
      onComplete();
    }
  }, [value]);
  console.log("percent: ", percent);
  return (
    <div className="Progress">
      <span
        style={{
          color: percent > 49 ? "white" : "black",
        }}
      >
        {percent.toFixed()}%
      </span>
      <div
        // style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent / 100})`,
          transformOrigin: "left",
        }}
        // optional
        // aria-valuemin={0}
        //aria-valuemax={100}
        // aria-valuenow={percent}
        //role="progressbar"
      />
    </div>
  );
}
