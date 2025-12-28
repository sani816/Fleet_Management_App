import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Login=({login})=>{
    const emailRef=useRef(null)
    const navigate=useNavigate()

    useEffect(()=>{
        emailRef.current.focus()
    },[])

    const handleSubmit=(e)=>{
    e.preventDefault()

    const email=emailRef.current.value;
    const password=document.getElementById("password").value;
    login(email,password)
    navigate("/admin")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef} placeholder="enter your email"></input>
            <input type="password" id="password" placeholder="enter your password"></input>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export  default Login;