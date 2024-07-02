import React, { useState, useEffect } from 'react';

const jsonData = [
  {
    "productName": "Dell XPS 13",
    "pricing": 1200,
    "rating": 4.5,
    "discount": "17%",
    "availability": "In Stock"
  },
  {
    "productName": "Apple MacBook Pro 16",
    "pricing": 2500,
    "rating": 4.8,
    "discount": "4%",
    "availability": "Pre-Order"
  },
  {
    "productName": "HP Spectre x360",
    "pricing": 1400,
    "rating": 4.3,
    "discount": "7%",
    "availability": "Out of Stock"
  },
  {
    "productName": "Lenovo ThinkPad X1 Carbon",
    "pricing": 1800,
    "rating": 4.7,
    "discount": "8%",
    "availability": "In Stock"
  },
  {
    "productName": "Asus ROG Zephyrus G14",
    "pricing": 1500,
    "rating": 4.6,
    "discount": "7%",
    "availability": "In Stock"
  },
  {
    "productName": "Microsoft Surface Laptop 4",
    "pricing": 1600,
    "rating": 4.4,
    "discount": "6%",
    "availability": "In Stock"
  },
  {
    "productName": "Acer Swift 3",
    "pricing": 800,
    "rating": 4.2,
    "discount": "6%",
    "availability": "In Stock"
  },
  {
    "productName": "Razer Blade 15",
    "pricing": 2200,
    "rating": 4.7,
    "discount": "5%",
    "availability": "Pre-Order"
  }
];

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Set the data directly
    setData(jsonData);
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter the data based on the selected product name
  const filteredData = filter
    ? data.filter(item => item.productName === filter)
    : data;

  return (
    <div className="app">
      <div>
        <label htmlFor="nameFilter">Filter by Product Name:</label>
        <select id="nameFilter" onChange={handleFilterChange}>
          <option value="">All Products</option>
          {data.map((item, index) => (
            <option key={index} value={item.productName}>{item.productName}</option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {filteredData.map((item, index) => (
          <div key={index} className="product-item">
            <h1>{item.productName}</h1>
            <p>Pricing: ${item.pricing}</p>
            <p>Rating: {item.rating} / 5</p>
            <p>Discount: {item.discount}</p>
            <p>Availability: {item.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
