import React from 'react'
import Header from '../Components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSllice'

const Wishlist=()=> {
  const dispatch=useDispatch()
  const viewWishlist=useSelector(state=>state.wishlistReducer)
const yourCart=useSelector(state=>state.cartReducer)
const handleCart=(product)=>{
  const existingProduct=yourCart?.find(item=>item.id==product.id)
  if(existingProduct)
    {
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      alert("Product quantity is incrementing...")
    }
    else{
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
    }
}

  return (
    <div>
      <Header/>
      <div className='container-fluid' style={{marginTop:"120px"}}>
      
         { viewWishlist?.length>0 ?
        <div>
          <h3 className='text-danger'>Your Wishlist</h3>
        
          <Row className='my-5'>
         
          {
            viewWishlist?.map(product=>(
              <Col key={product?.id} className='mb-5 me-2' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded' style={{ width: '18rem' }}>
        <Card.Img height={'180px'} variant="top" src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
          
          <div className='d-flex justify-content-around mt-3'>
            <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className="btn"><i className="fa-solid fa-heart-circle-xmark text-danger"></i></button>
            <button onClick={()=>handleCart(product)} className="btn"><i className="fa-solid fa-cart-plus text-success"></i></button>
          </div>
        </Card.Body>
      </Card>
          </Col>
            ))
            }
  
         </Row>
        </div>
      
       :
       <div className="text-center text-danger">
         <div className=''><img width={"150px"} src="https://i.pinimg.com/originals/f9/88/d5/f988d51f2683e1e765bba87241f2794d.png" alt="" /></div>
         Your wishlist is empty....
       </div>
   }
      </div>
    </div>
  )
}

export default Wishlist