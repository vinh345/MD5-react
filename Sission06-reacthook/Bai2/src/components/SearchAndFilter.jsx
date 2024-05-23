import React, { useState } from "react";

function SearchAndFilter() {
  const [filter, setFilter] = useState("");

  const [data, setData] = useState([
    { name: "John", age: 25 },
    { name: "Mary", age: 30 },
    { name: "Peter", age: 35 },
    { name: "Jane", age: 40 },
  ]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const fillteredData = data.filter(
    (item) =>
      item.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) != -1
  );

  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChange} />
      <ul>
        {fillteredData.map((item, index) => (
          <li key={index}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchAndFilter;
