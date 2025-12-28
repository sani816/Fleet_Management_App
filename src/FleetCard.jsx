import React,{memo} from "react"
const FleetCard=memo(({data,updateDriver,changeAvaibility,deleteVehicle})=>{

    
return(
    <div style={{border:"1px solid"}}>
  <h3>{data.vehicleRegNo}</h3>
  <p>Category:{data.category}</p>
  <p>Driver:{data.Drivername}</p>
  <p>Status:{data.AvaibilityStatus}</p>
  <button onClick={()=>updateDriver(data.id,prompt("enter new driver name"))}>Update Driver</button>
   <button onClick={()=>changeAvaibility(data.id)}>Toggle Availabilty</button>
    <button onClick={()=>deleteVehicle(data.id)}>Delete Vehicle</button>
  
    </div>
)
})
export default FleetCard