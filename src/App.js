import './App.css';
import {useState, useEffect} from "react";
import axios from "axios"
 
function App() {
  const [dt,setDet]=useState([])
  useEffect(() => {
   axios.get("https://api.covidtracking.com/v1/states/current.json")
   .then((res1)=>{
setDet(res1.data)
console.log(res1.data)
   })
  
  }, [])
  return (
    <div style={{textAlign:"center"}}>
    
    <h1 style={{textAlign:"center"}}>Covid Patient information(Data)</h1>
    <div>
   {
   dt.map((info)=> 
   <div className="card" style={{display:"inline-block",width:"200px",border:"1px solid black",textAlign:"center",margin:"7px"}} >
<p style={{textAlign:"center"}}><b>Date:</b> {info.date}</p>
<p style={{textAlign:"center"}}><b>State:</b> {info.state}</p>
<p style={{textAlign:"center"}}><b>Positive:</b> {info.positive}</p>
<p style={{textAlign:"center"}}><b>Recovered:</b> {info.recovered}</p>
<p style={{textAlign:"center"}}><b>Death:</b> {info.death}</p>


   </div> )
   
  } 
  </div>  
  </div>
  )
}

export default App;