import React,{useRef, useState} from "react";
import axios from "axios";
export default function Login():any{
    const uname:any= useRef();
    const upwd:any=useRef();
    const [status,setStatus] = useState("");

    const login = ()=>{
        axios.post("http://localhost:8080/login",
                    {"uname":uname.current.value,"upwd":upwd.current.value}).then((posRes:any)=>{
                        setStatus(posRes.data.login);
                    },(errRes:any)=>{
                        console.log(errRes);
                    })
    };

    return(
        <React.Fragment>
            
            <div className="login-page">
                <p className="heading">Login</p>
                    <input type="text" ref={uname} 
                        placeholder="Enter User Name"
                        name="uname" className="text" ></input>

                    <input type="password" ref={upwd} 
                        placeholder="Enter the Password"
                        name="upwd" className="text" ></input>

                
                    <input type="submit" value="Login" className="btn" onClick={login}></input>

               {/* <button onClick={login}>Login</button> */}

                
                <h1 style={{color:"red"}}>{status}</h1>



            </div>
        </React.Fragment>
    )
};