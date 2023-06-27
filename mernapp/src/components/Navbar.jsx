import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import Badge from 'react-bootstrap/Badge'
 import Model from '../Model'
import Cart from '../screens/Cart'
 import { useCart } from './ContentReducer'
export default function Navbar(props) {
  let data=useCart()
  const [cartview,setCartview]=useState(false)
const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('toke')
    navigate('/login')
  }

 return (

 <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky">
   <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-Italic" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-5 " aria-current="page" to="/">Home</Link>
        </li>
       {(localStorage.getItem('toke'))?
          <li className="nav-item">
          <Link className="nav-link active fs-5 " aria-current="page" to="/myOder">My Orders</Link>
        </li>
      :'' }

      </ul>
      {(!localStorage.getItem('toke'))?
          <form className='d-flex m-3'>
           <Link className="btn bg-white text-success nav-link mx-2" to="/login">Login</Link>

           <Link className="btn bg-white text-success nav-link mx-2" to="/createuser">Signup</Link>

       </form>:
         <div>
           <div className='btn bg-white text-success mx-2' onClick={()=>setCartview(true)}>
        My Cart{" "}
        <Badge pill bg="danger">{data.length}</Badge>
        </div> 
        {cartview ? <Model onClose={() => setCartview(false)}><Cart/></Model>:""}
        <button className='btn bg-white text-danger mx-2 ' onClick={handleLogout}>
        Logout
        </button>
        </div>}

    </div>
  </div>
</nav>
    </>
  )
}
