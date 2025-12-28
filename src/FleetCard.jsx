const FleetCard=memo(({data,updateDriver,changeAvailability,deleteVheicle})=>{
return(
    <div style={{border:"1px solid"}}>
  <h3>{data.vehicleRegNo}</h3>
  <p>Category:{data.category}</p>
  <p>Driver:{data.driverName}</p>
  <p>Status:{data.availabilityStatus}</p>
  <button onClick={()=>updateDriver(data.id,prompt("enter new driver name"))}>Update Driver</button>
   <button onClick={()=>changeAvailability(data.id)}>Toggle Availabilty</button>
    <button onClick={()=>deleteVheicle(data.id)}>Delete Vehicle</button>
  
    </div>
)
})
export default FleetCard