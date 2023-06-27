import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [creditial, setCreditial] = useState({ email: "", password: "" })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const respose = await fetch("http://localhost:3001/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: creditial.email, password: creditial.password })

    })

    const json = await respose.json()
    console.log(json)

    if (!json) {
      alert("Enter Valid Credentials")
    } else {
      alert("successfull")
      localStorage.setItem("userEmail",creditial.email)
      localStorage.setItem("toke",json.toke)
      console.log(localStorage.getItem("toke"))
      navigate("/")
    }
  }
  const onChange = (event) => {
    setCreditial({ ...creditial, [event.target.name]: event.target.value })
  }
  return (
    <>
      <div className='container bg:rgb(0,0,0)' >
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={creditial.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" value={creditial.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new User</Link>
        </form>
      </div>
    </>
  )
}
