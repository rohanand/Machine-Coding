export function CheckBoxItem({ nodes, checked, setChecked, originalList }) {
  const updateChildren = (node, isChecked, state) => {
    state[node.id] = isChecked;
    node.children?.forEach((child) => updateChildren(child, isChecked, state));
  };

  const updateParents = (list, state) => {
    list.forEach((node) => {
      if (node.children) {
        updateParents(node.children, state);
        const allChecked = node.children.every((child) => state[child.id]);
        state[node.id] = allChecked;
      }
    });
  };

  const onChange = (e, node) => {
    const isChecked = e.target.checked;
    const state = { ...checked };

    updateChildren(node, isChecked, state);
    updateParents(originalList, state);
    setChecked(state);
  };

  return (
    <div style={{ marginLeft: 20 }}>
      {nodes.map((node) => (
        <div key={node.id}>
          <label>
            <input
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => onChange(e, node)}
            />
            {node.label}
          </label>
          {node.children && (
            <CheckBoxItem
              nodes={node.children}
              checked={checked}
              setChecked={setChecked}
              originalList={originalList}
            />
          )}
        </div>
      ))}
    </div>
  );
}
