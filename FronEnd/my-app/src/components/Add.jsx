import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

export default function AddProduct() {
  const [name, setname] = useState("");
  const [price, setprice] = useState(0);
  const [imageUrl, setimage] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleAddProduct = () => {
    const newprod = {
      name: name,
      price: price,
      imageUrl: imageUrl,
    };

    console.log(newprod);

    axios.post(`http://localhost:3000/api/iphones/add`, newprod)
      .then(res => {
        console.log(res.data);
        setname("");
        setprice(0);
        setimage("");
        setEditingId(null); // Clear editing state after successful submission
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="add-product-container">
      <button onClick={() => setEditingId(Date.now())}> ➕ </button>
      {editingId !== null && (
        <div>
       <div class="input-container">
  <input type="text" placeholder="name" value={name} onChange={(e) => setname(e.target.value)} />
</div>

<div class="input-container">
  <input type="text" placeholder="price" value={price} onChange={(e) => setprice(e.target.value)} />
</div>

<div class="input-container">
  <input type="text" placeholder="imgURL" value={imageUrl} onChange={(e) => setimage(e.target.value)} />
</div>

          <button className='button-85' onClick={handleAddProduct}>Submit</button>
        </div>
      )}
    </div>
  );
}


