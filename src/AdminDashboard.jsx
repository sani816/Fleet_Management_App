import { useCallback, useState } from "react"
import FleetCard from "./FleetCard"
const AdminDashboard=()=>{
    const[fleetData,setFleetData]=useState([
        {id:1,vehicleRegNo:"ABC1",category:"Car",Drivername:"John",AvaibilityStatus:"Available"},
        {id:2,vehicleRegNo:"ABC2",category:"truck",Drivername:"dev",AvaibilityStatus:"Unavailable"},
    ])
    const [newFleet,setNewFleet]=useState({vehicleRegNo:"",category:"",Drivername:""})

    const addFleet=useCallback(()=>{
        if(!newFleet.vehicleRegNo||!newFleet.category||!newFleet.Drivername){
            alert("Please fill All the fields")
            return
        }
        setFleetData([...fleetData,{...newFleet,id:Date.now(),AvaibilityStatus:"Available"}])
        setNewFleet({vehicleRegNo:"",category:"",Drivername:""})
    },[newFleet,fleetData])

const updateDriver=useCallback((id,driverName)=>{
    if(!driverName.trim()){
        alert("driver name can't be empty")
        return
    }
    setFleetData(fleetData.map(vehicle=>vehicle.id===id?{...vehicle,AvaibilityStatus:vehicle.AvaibilityStatus==="avalable"?"unavailable":"available"}:vehicle))
},[fleetData])

const changeAvaibility=useCallback((id)=>{
    setFleetData(fleetData.map(vehicle=>vehicle.id===id?{...vehicle,driverName}:vehicle))
},[fleetData])

const deleteVehicle=useCallback((id)=>{
    if(window.confirm("are u sure to delete this vehicle?")){
        setFleetData(fleetData.filter(vehicle=>vehicle.id!==id))
    }
},[fleetData])

    return(
        <div>
            <h1>Admin Page</h1>
            <div>
                <input type="text" placeholder="enter vehicle reg no" value={newFleet.vehicleRegNo} onChange={(e)=>setNewFleet({...newFleet,vehicleRegNo:e.target.value})}></input>
                <select value={newFleet.category} onChange={(e)=>setNewFleet({...newFleet,category:e.target.value})}>
                 <option value="">select Category</option>
                 <option value="Car">Car</option>
                 <option value="Van">Van</option>
                 <option value="Truck">Truck</option>
                </select>
                 <input type="text" placeholder="Driver name" value={newFleet.Drivername} onChange={(e)=>setNewFleet({...newFleet,Drivername:e.target.value})}></input>
                 <button onClick={addFleet}>Add Fleet</button>
            </div>
            {fleetData.map(vehicle=>(
                <FleetCard key={vehicle.id} data={vehicle} updateDriver={updateDriver}
                changeAvaibility={changeAvaibility} deleteVehicle={deleteVehicle}/>
            ))}
        </div>
    )
}
export default AdminDashboard;