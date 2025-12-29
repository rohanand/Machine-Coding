import { useRef, useState } from "react";

export default function DragDrop({ initialData }) {
  console.log(initialData);
  const [data, setData] = useState(initialData);
  const dragItem = useRef();
  const dragContainer = useRef();
  const handleDragStart = (e, item, container) => {
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
  };
  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };
  const handleDrop = (targetContainer) => {
    const sourceContainer = dragContainer.current;
    const item = dragItem.current;
    setData((prev) => {
      const newData = { ...prev };
      newData[sourceContainer] = newData[sourceContainer].filter(
        (i) => i !== item
      );
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {Object.keys(data).map((container, index) => {
        return (
          <div
            key={index}
            style={{
              background: "#f0f0f0",
              padding: "1rem",
              width: 250,
              minHeight: 300,
            }}
            onDrop={() => handleDrop(container)}
            onDragOver={(e) => handleDragOver(e)}
          >
            <h2>{container}</h2>
            {data[container].map((content, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    userSelect: "none",
                    marginTop: "8px",
                    padding: 16,
                    backgroundColor: "yellow",
                    cursor: "move",
                  }}
                  draggable
                  onDragStart={(e) => handleDragStart(e, content, container)}
                  onDragEnd={(e) => handleDragEnd(e)}
                >
                  {content}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
