import React, { useState } from "react";
import { CheckBoxItem } from "./components/CheckBoxItem";

// Sample nested data
const data = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      {
        id: 3,
        label: "Banana",
        children: [{ id: 4, label: "Banana 1" }],
      },
    ],
  },
  {
    id: 5,
    label: "Vegetables",
    children: [
      { id: 6, label: "Carrot" },
      { id: 7, label: "Broccoli" },
    ],
  },
];

export default function App() {
  const [checked, setChecked] = useState({});
  return (
    <>
      <h2>Nested Checkbox Tree</h2>
      <CheckBoxItem
        nodes={data}
        checked={checked}
        setChecked={setChecked}
        originalList={data}
      />
    </>
  );
}
