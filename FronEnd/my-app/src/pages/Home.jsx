
import Oppo from "../components/oppo";
import Galaxy from "../components/galaxy";
import Popular from "../components/Iphones";

import React from 'react'
import Addproduct from "../components/Add";


function Home() {
  return (
    <div>
    
      <Addproduct/>
        <Popular/>
        <Galaxy/>
        <Oppo/>
    </div>
  )
}

export default Home