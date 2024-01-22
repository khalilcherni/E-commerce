import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdOutlinePhonelinkRing } from 'react-icons/md';
import '../index.css'
function Categorie() {
  const handleButtonClick = () => {
    window.location.href = 'https://www.apple.com/fr/iphone-15/';
  };

  return (
    <List>
          <Slink as={NavLink} to="/iphones">
        <MdOutlinePhonelinkRing />
        <button  className="button-12" onClick={handleButtonClick}>Iphones</button>
      </Slink>
      <Slink>
        <MdOutlinePhonelinkRing />
        <h4>Glaxy</h4>
      </Slink>
      <Slink>
        <MdOutlinePhonelinkRing />
        <h4>Infinix</h4>
      </Slink>
      <Slink>
        <MdOutlinePhonelinkRing />
        <h4>Oppo</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Slink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
  
`;

export default Categorie;
