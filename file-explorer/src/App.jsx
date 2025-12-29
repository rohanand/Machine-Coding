import "./index.css";
import { files } from "./files";
import Folder from "./components/Folder";

export default function App() {
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <Folder files={files} />
    </div>
  );
}
