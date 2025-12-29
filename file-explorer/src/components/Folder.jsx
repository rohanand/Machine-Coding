import { useState } from "react";

const Folder = (props) => {
  const { files } = props;
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <div onClick={() => setExpand(!expand)}>
        {files.isFolder ? (
          <button className={expand ? "expand" : ""}> {">"} </button>
        ) : null}
        {files.name}
      </div>
      <div>
        {files.isFolder &&
          expand &&
          files.children.map((data) => {
            return (
              <div style={{ paddingLeft: "20px" }}>
                <Folder files={data} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Folder;
