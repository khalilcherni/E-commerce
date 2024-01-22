import React ,{useState}from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
function Search() {

    const[input,setinput]= useState("")
    const handle=()=>{
axios.get(`http://localhost:3000/api/iphones/iphone14`)

    }


    
  return (
   <FormStyle >
    <div>
    <FaSearch> </FaSearch>
    <input onChange={(e)=>setinput(e.target.value)} type='text' value={input}/>
    </div>
   </FormStyle>
  )
}
const FormStyle=styled.div`
div{
    width: 300%;
    position: relative;
}
input{
  border: none;
    background: linear-gradient(35deg ,#494949,#313131);
    font-size: 0.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 500px;
    margin-top : 50px;
    align-items: center;
    margin-left : 200px
    
};
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100%,-50% );
    color:white;
}
`;
export default Search