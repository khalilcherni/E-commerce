import React,{useState,useEffect} from 'react'

import '../index.css'
import styled from 'styled-components'
import axios from 'axios'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

function Galaxy() {
  const [data, setData] = useState([]);
  const [newPrice, setNewPrice] = useState('');
  const [newName, setnewName] = useState('');
  const [newImage, setnewImage] = useState('');
  const [editingId, setEditingId] = useState(null);
 
  //  const [view, setView] = useState('productDetails')
  useEffect(()=>{
  axios.get('http://localhost:3000/api/galaxy/get')
  .then(res=>setData(res.data))
  .catch(err=>console.log(err))
  
  
  },[])
  const handledelete = (id) => {
    axios.delete(`http://localhost:3000/api/galaxy/delete/${id}`)
      .then(() => {
        const updatedData = data.filter(e => e.id !== id);
        setData(updatedData);
      })
      .catch(err => console.log(err));
  }

  const handleUpdateClick = (id) => {
    setEditingId(id);
    const selectedItem = data.find(item => item.id === id);
    setNewPrice(selectedItem.price);
    setnewName(selectedItem.name);
    setnewImage(selectedItem.imageUrl);
  }

  const updateProduct = (id) => {
    axios.put(`http://localhost:3000/api/galaxy/put/${id}`, { price: newPrice, name: newName, imageUrl: newImage })
      .then(() => {
        const updatedData = data.map(item => {
          if (item.id === id) {
            return { ...item, price: newPrice, name: newName, imageUrl: newImage };
          }
          return item;
        });
        setData(updatedData);
        setEditingId(null);
      })
      .catch(err => console.log(err));
  }

  const handleCancelUpdate = () => {
    setEditingId(null);
  }

  return (
    <div>
      <Wrapper>
        <h3>Galaxy </h3>

        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "5rem"
        }} >

          {data.map((e) => (
            <SplideSlide key={e.id}>
              <Card className='glxy'>
                <img className='img' src={e.imageUrl} alt="" />
                <p>{e.name}</p>
                <p> Price:{e.price}dt </p>

                <div>
                  <button onClick={() => handleUpdateClick(e.id)}>🌀</button>
                  <button className='btn' onClick={() => handledelete(e.id)}>🗑️</button>
                </div>
              </Card>
            </SplideSlide>
          ))}
        </Splide>

        {/* Update Form */}
        {editingId !== null && (
          <UpdateForm>
            <label htmlFor="newPrice">New Price:</label>
            <input
              type="text"
              id="newPrice"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
            <label htmlFor="newName">New Name:</label>
            <input
              type="text"
              id="newName"
              value={newName}
              onChange={(e) => setnewName(e.target.value)}
            />
            <label htmlFor="newImage">New Image URL:</label>
            <input
              type="text"
              id="newImage"
              value={newImage}
              onChange={(e) => setnewImage(e.target.value)}
            />
            <button onClick={() => updateProduct(editingId)}>Update Product</button>
            <button onClick={handleCancelUpdate}>Cancel</button>
          </UpdateForm>
        )}
      </Wrapper>
    </div>
  )
}

const Wrapper= styled.div`
 margin: 4rem 0 rem 
`;
const Card= styled.div`
 min-height :25rem;
 border-radius :2rem;
 overflow:hidden;
 position:realtive;

 img{
border-radius:2rem
position :absolute
left:0
width:100%
height:100%
object-fit:cover

 }
 p{
  position :absolute
  z-index:
  left:50%
  bottom:0%
  transform:translate(-50%,0%)
  color:white
  width:100% 
  text-align:center
  font-weight:600
  font-size:1rem
  height:40%
  display:flex
  justify-content:center
  align-items:center
 }

 div {
   display: flex;
   justify-content: space-around;
   margin-top: 1rem;
 }

 button {
   cursor: pointer;
   z-index:1;
   item-align:center;
 }
`;

const UpdateForm = styled.div`
  margin-top: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    background-color: #4caf50;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    margin-right: 1rem;
  }
`;

export default Galaxy