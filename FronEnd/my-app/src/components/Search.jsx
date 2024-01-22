import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

function Getone() {
  const [name, setName] = useState('');
  const [data, setData] = useState(null);

  const handleClick = () => {
    axios
      .get(`http://localhost:3000/api/iphones/${name}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product: ', error);
      });
  };

  return (
    <FormStyle>
      <div>
        <StyledInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
        />
        <StyledButton onClick={handleClick}>
          <FaSearch />
        </StyledButton>
      </div>
      {data && (
        <div>
          <img src={data[0].imageUrl} alt={data[0].name} />
          <div>Name: {data[0].name}</div>
          <div>Price: dt{data[0].price}</div>
        </div>
      )}
    </FormStyle>
  );
}

const FormStyle = styled.div`
  div {
    width: 300%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 0.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 500px;
    margin-top: 50px;
    align-items: center;
    margin-left: 200px;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

const StyledInput = styled.input`
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 0.5rem;
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  outline: none;
  width: 500px;
  margin-top: 50px;
  align-items: center;
  margin-left: 500px;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 79%;
  left: 7%;
  transform: translate(100%, -50%);
  background-color: grey;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
`;

export default Getone;
