import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", status: "Active" },
    { id: 2, name: "Jane Smith", status: "Inactive" },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    const name = prompt("Enter name:");
    const status = prompt("Enter status (Active/Inactive):");
    if (name && status) {
      setData([...data, { id: data.length + 1, name, status }]);
    }
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Row</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.status}</td>
              <td>
                <button onClick={() => handleDelete(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
