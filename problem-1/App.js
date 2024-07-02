import React, { useState, useEffect } from 'react';

const jsonData = [
  {
    "name": "even",
    "numbers": [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
  },
  {
    "name": "prime",
    "numbers": [2, 3, 5, 7, 11, 13]
  },
  {
    "name": "fibo",
    "numbers": [55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]
  },
  {
    "name": "rand",
    "numbers": [2, 19, 25, 7, 4, 24, 17, 27, 30, 21, 14, 10, 23]
  }
];

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Simulate API call by setting data directly
    setData(jsonData);
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = data.filter(item => item.name === filter);

  return (
    <div className="app">
      <div>
        <label htmlFor="nameFilter">Filter by Name:</label>
        <select id="nameFilter" onChange={handleFilterChange}>
          <option value="">Select a name</option>
          {data.map((item, index) => (
            <option key={index} value={item.name}>{item.name}</option>
          ))}
        </select>
      </div>

      {filteredData.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
            {item.numbers.map((number, numIndex) => (
              <h1>[{number}]</h1>
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
