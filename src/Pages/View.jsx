import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import {addToWishlist} from '../Redux/Slices/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart} from '../Redux/Slices/cartSllice'

const View = () => {
  const [product,setProduct]=useState()
  const {id}=useParams()
 const userWishlist=useSelector(state=>state.wishlistReducer)
 const userCart=useSelector(state=>state.cartReducer)
 const dispatch=useDispatch()
 console.log(userWishlist)
  useEffect(()=>{
        if(localStorage.getItem("allProducts")){
          const allProducts=JSON.parse(localStorage.getItem("allProducts"))
          setProduct(allProducts.find(item=>item.id==id))
        }
  },[])
  const handleWishlist = ()=>{
    if(userWishlist?.includes(product)){
      alert("Product is already in your wishlist.....")
    }
    else{
         dispatch(addToWishlist(product))
    }
  }

  const handleCart=()=>{
    const existingProduct=userCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("existing product quantity is incrementing...")
    }
    else{
      dispatch(addToCart(product))
    }
  }
  return (
    <div>
      <Header/>
      <div className="row container">
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <img className='img-fluid' src={product?.thumbnail} style={{marginTop:"150px"}} alt="" />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5" style={{marginTop:"100px",textAlign:"justify"}}>
          <h5>{product?.id}</h5>
          <h1>{product?.title}</h1>
          <h2 className='text-danger'>${product?.price}</h2>
          <p>Description : {product?.description}</p>
          <div className='d-flex justify-content-between mt-3'>
            <button onClick={handleWishlist} type="button" class="btn btn-outline-dark"><i className="fa-solid fa-heart text-danger"></i>ADD TO WISHLIST</button>
            <button onClick={handleCart} type="button" class="btn btn-outline-dark"><i class="fa-solid fa-cart-plus text-success"></i>ADD TO CART</button>
          </div>

        </div>
      </div>

    </div>
  )
}
export default View