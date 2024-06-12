import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { removeCartItem ,incQuantity,decQuantity,emptyCart} from '../Redux/Slices/cartSllice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Cart=()=> {
  const [cartTotal,setCartTotal]=useState(0)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const cartItems=useSelector(state=>state.cartReducer)
 const handleDecrement=(product)=>{
  if(product.quantity>1){
    dispatch(decQuantity(product.id))
  }else{
    dispatch(removeCartItem(product.id))
  }
 }
const checkOut=()=>{
    dispatch(emptyCart())
    alert("Order placed successfully. Thank you for purchasing with us...")
    navigate('/')
}
useEffect(()=>{
    if(cartItems?.length>0){
      setCartTotal(cartItems?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }
    else{
      setCartTotal(0)
    }
},[cartItems])
  return (
    <div>
      <Header/>
     
      <div className='container' style={{marginTop:"120px"}}>
   {
    cartItems?.length>0?
        <div className='cart'>
          <h1>Cart Summary</h1>
          <div className="row mt-4">
            <div className="col-lg-8">
              <table className="table shadow">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
    <tbody>
    {
  cartItems?.map((product,index)=>(

                  <tr key={product?.id}>
                    <td>{index+1}</td>
                    <td>{product?.title}</td>
                    <td><img width={"50px"} height={"70px"} src={product?.thumbnail} alt="product img" /></td>
                    <td>
                      <div className="d-flex">
                        <button onClick={()=>handleDecrement(product)} className="btn fw-bolder">-</button>
                        <input value={product?.quantity} style={{width:"50px"}} className='fw-bolder me-1 ms-1' type="text" readOnly/>
                        <button onClick={()=>dispatch(incQuantity(product?.id))} className="btn fw-bolder">+</button>
                      </div>
                    </td>
                    <td>${product?.totalPrice}</td>
                    <td>
                      <button onClick={()=>dispatch(removeCartItem(product?.id))} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
                    </td>
                  </tr>
               ))             
                }
                 </tbody>
              </table>
              <div className="float-end">
                <button onClick={()=>dispatch(emptyCart())} className="btn btn-danger">EMPTY CART</button>
                <Link to={'/'} className='btn btn-success ms-2'>SHOP MORE</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="border rounded shadow p-3">
                <h3>Total Amount : <span className='text-danger'>${cartTotal}</span></h3>
                <hr />
                <button onClick={checkOut} className="btn btn-success w-100">CHECKOUT</button>
              </div>
            </div>
            
          </div>
        </div>
       : 
     
        <div className="text-center text-danger">
          <div className=''><img width={"150px"} src="https://i.pinimg.com/originals/f9/88/d5/f988d51f2683e1e765bba87241f2794d.png" alt="" /></div>
          Your Cart is empty....
        </div>
}
      </div>
      
    </div>
  )
}

export default Cart