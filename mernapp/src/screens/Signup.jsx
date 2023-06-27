import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [creditial,setCreditial]=useState({name:"",geolocation:"",email:"",password:""})
     const handleSubmit=async(e)=>{
       e.preventDefault();
       const respose=await fetch("http://localhost:3001/api/createuser",{
         method:'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({name:creditial.name,location:creditial.geolocation,email:creditial.email,password:creditial.password})

     })

     const json=await respose.json()
     console.log(json)

     if(!json){
      alert("Enter Valid Credentials")
     }
    }
  const onChange=(event)=>{
    setCreditial({...creditial,[event.target.name]:event.target.value})
  }
    return (
     <>
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={creditial.name} onChange={onChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={creditial.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={creditial.password} onChange={onChange} className="form-control"  id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" name="geolocation" value={creditial.geolocation} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to="/login" className='m-3 btn btn-danger'>Already A User</Link>
            </form>
         </div>
    </>
    )
}
