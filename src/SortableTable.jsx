import React, { useState } from "react";
import "./SortableTable.css"; // Importing external CSS

function SortableTable() {
  const employees = [
    { name: "Gowtham", department: "IT", salary: 50000 },
    { name: "Yasasree", department: "HR", salary: 47000 },
    { name: "Rama", department: "Finance", salary: 52000 },
    { name: "Sita", department: "Marketing", salary: 48000 },
  ];

  const [data, setData] = useState(employees);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="table-container">
      <h2>Sortable Employee Table</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("department")}>Department</th>
            <th onClick={() => handleSort("salary")}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SortableTable;
