import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    let nav=useNavigate();
    let[data,updateValue]=useState({id:'',pwd:''});
    const change=(e)=>{
        updateValue({...data,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{ 
        e.preventDefault();
        if(data.id==="admin" && data.pwd==="12345"){
            nav("/ulogin")
        }else{
            alert("Invalid Credentials")
        }
        
    }
    return(
        <>
          <br/><div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-2"></div>
            <div className="col-sm-6 " style={{height:'600px',width:'300px'}}>
                <form  onSubmit={submit}>
                    <img class="mb-4" src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 font-weight-normal">Please Log In</h1>
                    <input id="inputEmail" class="form-control" type="text" name='id' value={data.name} onChange={change} placeholder="enter Id"/>      
                    <input id="inputPassword" class="form-control" type="password" name="pwd" value={data.pwd} onChange={change} placeholder="enter Password"/>      
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block"style={{width:"275px"}} type="submit">Log In</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017-2022</p>
                </form>
            </div>
          </div>
          </>
    )
}
export default Login;