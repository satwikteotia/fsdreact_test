import React, { useState, useEffect } from 'react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
  ]);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const results = items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchTerm, items]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
