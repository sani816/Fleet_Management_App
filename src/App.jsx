import { useCallback, useState } from "react";
import Login from "./Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
function App(){

    const[isAuthenticated,setIsAuthenticated]=useState(false)

    const login=useCallback((email,password)=>{
        if(email==="admin@gmail.com"&& password==="admin1234"){
            setIsAuthenticated(true)
            alert("login succesfull")
        }else{
            alert("Wronf email or password")
        }
    },[])
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login login={login}/>}></Route>
            <Route path="/admin" element={isAuthenticated?<AdminDashboard/>:<Navigate to="/login"/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App;