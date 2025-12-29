import DragDrop from "./components/DragDrop";
import "./index.css";
import initialData from "../src/config";

export default function App() {
  return (
    <div className="App">
      <h1>Drag and Drop (Kanban Board)</h1>
      <DragDrop initialData={initialData} />
    </div>
  );
}
