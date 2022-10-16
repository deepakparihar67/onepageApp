import React from "react"
import { useState,useEffect } from "react";
import axios from "axios";
const Ahome=()=>{
    let[data,updateData]=useState([]);
        let[sid,updateSid]=useState();
        let [stud,updateStud]=useState({id:'',roll:'',branch:'',year:'',username:'',first_name:'',last_name:'',email:'',password:''});
        useEffect(function(){
          
          show();
        })
        const stuchange=(e)=>{
          updateStud({...stud,[e.target.name]:e.target.value});
      
        }
        async function show(){
            var res=await axios.get("http://restp.herokuapp.com/student/");
            updateData(res.data);
        }
        function change(e){
          updateSid(e.target.value);
        }
    return(
       
       
       
          <>
          <br/><h1 className="text-center text-white" style={{backgroundColor:"rgb(5,25,55)"}}>Student Information Table</h1><br/>
          <pre>
            <form onSubmit={(e)=>{
              e.preventDefault();
              if(stud.id===''){
                async function AddStu(){
                  var res=await axios.post("http://restp.herokuapp.com/student/",{roll:stud.roll,branch:stud.branch,year:stud.year,username:stud.username,first_name:stud.first_name,last_name:stud.last_name,email:stud.email,password:stud.password});
                  if(res.status===201){
                    alert("Student Data Added");
                  }
                }
                AddStu();
              }
              else{
                async function updateS(){
                  var res=await axios.put(`http://restp.herokuapp.com/student/${stud.id}/`,stud);
                  if(res.status===200){
                    alert("student Data Updated");
                  }
                }
                updateS();
                updateStud({id:'',roll:'',branch:'',year:'',username:'',first_name:'',last_name:'',email:'',password:''});
              }
            }}>
              RollNo     <input type='number' name='roll' value={stud.roll} onChange={stuchange} /><br/><br/>
              Branch     <input type='text' name="branch" value={stud.branch} onChange={stuchange} /><br/><br/>
              Year       <input type='number' name="year" value={stud.year} onChange={stuchange} /><br/><br/>
              Username   <input type='text' name="username" value={stud.username} onChange={stuchange} /><br/><br/>
              First Name <input type='text' name="first_name" value={stud.first_name} onChange={stuchange} /><br/><br/>
              Last Name  <input type='text' name="last_name" value={stud.last_name} onChange={stuchange} /><br/><br/>
              Email      <input type='email' name="email" value={stud.email} onChange={stuchange} /><br/><br/>
              Password   <input type='text' name="password" value={stud.password} onChange={stuchange} /><br/><br/>
              <button className="btn btn-lg btn-primary">Add Data</button><span></span>&nbsp;&nbsp;
              <button className="btn btn-lg btn-warning">Update Data</button><br/><br/>
      
            </form>
          </pre>
          <input type="number" value={sid}  onChange={change}  placeholder="Enter id to search" /><br/><br/>
             <button className="btn btn-lg btn-primary" onClick={(e)=>{ 
            async function search(){
              var res=await axios.get(`http://restp.herokuapp.com/student/${sid}/`);
              updateData([res.data]);
               e.preventDefault();
                }
                search();
            
      
          }}>Search</button>&nbsp;&nbsp;
          <button className="btn btn-lg btn-primary" onClick={show}>Show All Data</button><br/><br/>
          <table className="table table-bordered table center">
            <thead className="text-dark text-center" style={{backgroundColor:"rgb(168,235,18)"}}>
              <tr>
                <th>ID</th>
                <th>ROLL NUMBER</th>
                <th>BRANCH</th>
                <th>YEAR</th>
                <th>USERNAME</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
                <th>Delete</th>
                <th>Update</th>
      
              </tr>
      
            </thead>
            <tbody>
              {
                data.map((s)=>{
                  return(
                    <>
                    <tr className="text-center">
                      <td>{s.id}</td>
                      <td>{s.roll}</td>
                      <td>{s.branch}</td>
                      <td>{s.year}</td>
                      <td>{s.username}</td>
                      <td>{s.first_name}</td>
                      <td>{s.last_name}</td>
                      <td>{s.email}</td>
                      <td>{s.password}</td>
                      <td><button className="btn btn-danger text-white" onClick={()=>{
                        async function delstu(){
                          var res=await axios.delete(`http://restp.herokuapp.com/student/${s.id}/`)
                          if(res.status===204){
                            alert("Sucessfully Deleted Data of Student");
                          }
      
                        }
                        delstu();
      
                      }}>Delete</button></td>
      
                      <td><button className="btn btn-warning text-white" onClick={()=>{
                        updateStud(s);
                      }}>Update</button></td>
                    </tr>
                    </>
                    
                  )
      
                })
              }
      
            </tbody>
      
          </table>
          
          
          </>
    )

}
export default Ahome;