import React, { useState } from "react";

function WaterTracker(){

 const [water,setWater] = useState(0);

 return(
  <div className="card">

   <h3>Water Intake</h3>

   <h2>{water} Glass</h2>

   <button onClick={()=>setWater(water+1)}>
   + Drink Water
   </button>

  </div>
 )
}

export default WaterTracker