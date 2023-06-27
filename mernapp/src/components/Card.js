import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContentReducer'
export default function Card(props) {
    let dispatch=useDispatchCart()
    let data=useCart()
    const priceRef=useRef()
    let options=props.options
    let priceoptins=Object.keys(options)

     const [qty,setQty]=useState(1)
     const [size,setSize]=useState("")
    
    const handleAddToCart=async()=>{
        let food=[]
        for(const item of data)
          {
            if(item.id===props.foodItems._id)
            {
            food=item
            break;
            }
          }

          if(food!==[])
           {
            if(food.size===size)
              {
                await dispatch({type:"UPDATE",id:props.foodItems._id,price:finalPrice,qty:qty})
                return  
            }
            else if(food.size!==size)
             {
                await dispatch({type:"ADD",id:props.foodItems._id,name:props.foodItems.name,price:finalPrice, qty:qty,size:size,img:props.foodItems.img})
                return
             }
             return
            }
             await dispatch({type:"ADD",id:props.foodItems._id,name:props.foodItems.name,price:finalPrice, qty:qty,size:size,img:props.foodItems.img})
           
      
    }

    let finalPrice=qty*parseInt(options[size])
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    return (

        <div>
            <div className="card mt-3" style={{ "width": "20rem", "maxHeight": "500px" }}>
                <img src={props.foodItems.img} className="card-img-top" style={{ "width": "100%", "maxHeight": "220px " ,height:"220px" ,objectFit:"fill" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItems.name}</h5>
                    <p>{props.foodItems.description}</p>
                    <div className='container w-100'>
                        <select className='m-3 h-100 bg-success rounded' onChange={(e)=>setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                            {priceoptins.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr>
                    </hr>
                    <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>

    )
}
