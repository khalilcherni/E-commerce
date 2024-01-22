import React, { useState } from 'react'
import axios from 'axios'
export default function Addproduct() {

const[name,setname]=useState("")
const[price,setprice]=useState(0)


const[imageUrl,setimage]=useState("")



const handle=()=>{

const newprod={
    name:name,
    price:price,
   
    imageUrl:imageUrl,


}
console.log(newprod);

axios.post(`http://localhost:3000/api/iphones/add`,newprod)

.then(res=>{
    console.log(res.data);
setname("")
setprice(0)


setimage("")
})
.catch(err=>console.log(err))
}



   return (
    <div>
<button onClick={handle}> ➕ </button>
<input  placeholder='name' value={name} onChange={(e)=>setname(e.target.value)}  />
<input  placeholder='price' value={price} onChange={(e)=>setprice(e.target.value)}  />

<input  placeholder='imgURL' value={imageUrl} onChange={(e)=>setimage(e.target.value)}  />



    </div>
  )
}
