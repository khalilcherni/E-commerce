import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdOutlinePhonelinkRing  } from 'react-icons/md';


function Categorie() {
  return (
    <List>
      <Slink to={'/cuisine/Italien'}>
        <MdOutlinePhonelinkRing  />
        <h4>Iphones</h4>
      </Slink>
      <Slink to={'/cuisine/American'}>
        <MdOutlinePhonelinkRing  />
        <h4>Glaxy</h4>
      </Slink>
      <Slink to={'/cuisine/Taifood'}>
        <MdOutlinePhonelinkRing />
        <h4>Infinix</h4>
      </Slink>
      <Slink to={'/cuisine/Japannese'}>
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
const Slink= styled(NavLink)`
display:flex;
flex-dirction:column;
justify-content;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background: linear-gradient(35deg,#494949,#313131);
width:4rem;
height:4rem;
cursor :pointer;
transform:scale(0.8);
h4{
    color:white;
    font-size:0.8rem;
}
svg{
    color:white;
    font-size:1.5rem;
}
&.active {
    background:linear-gradient(to right ,#f27121,#e94057);
    svg{
        color:white;
       
    }
    h4{
        color:white;
       
    }
}

`
export default Categorie;
