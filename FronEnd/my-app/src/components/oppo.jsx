import React,{useState,useEffect} from 'react'

import styled from 'styled-components'
import axios from 'axios'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

function Oppo() {
  const [data,setData]=useState([])
 
  //  const [view, setView] = useState('productDetails')
  useEffect(()=>{
  axios.get('http://localhost:3000/api/oppo/get')
  .then(res=>setData(res.data))
  .catch(err=>console.log(err))
  
  
  },[])

  return (
    <div >

<Wrapper >
<h3>Oppo</h3>
<Splide options={{
  perPage:4,
  arrows:false,
  pagination:false,
  drag:'free',
  gap:"5rem"
}} >


{data.map((e)=>(
<SplideSlide> 
<Card>

  <img src={e.imageUrl} alt=""/>
  <p>{e.name}</p>
  <p> Price:{e.price}dt </p>
</Card>
</SplideSlide>
))}

</Splide>
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


`

export default Oppo