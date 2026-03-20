import React,{useState} from "react"

function StepTracker(){

 const [steps,setSteps] = useState(0)

 return(

  <div className="card">

   <h3>Daily Steps</h3>

   <h1>{steps}</h1>

   <button onClick={()=>setSteps(steps+100)}>
   Add 100 Steps
   </button>

  </div>
 )

}

export default StepTracker