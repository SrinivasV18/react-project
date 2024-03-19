import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductList } from './components/ProductList';

function App() {
  const [category, setCategory] = useState('');
  return (
    <div className="App">
      Select Category
      <select className="form-select" 
      onChange={(event) => setCategory(event.target.value)}>
        <option value="Select Category">Select Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
     <ProductList category={category}/>
    </div>
  );
}

export default App;
