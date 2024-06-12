import React from 'react'
import { Container, Navbar ,Nav, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../Redux/Slices/productSlice'

function Header({insideHome}) {
  const dispatch=useDispatch()
  const yourWishlist=useSelector(state=>state.wishlistReducer)
  const yourCart=useSelector(state=>state.cartReducer)
  return (
    <div>
          <Navbar expand="lg" className="bg-info w-100 position-fixed top-0" style={{zIndex:"10"}}>
      <Container>
        <Navbar.Brand><Link to={'/'} className='fw-bolder' style={{color:"white",textDecoration:"none"}}><i className='fa-solid fa-cart-plus'></i> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { insideHome &&
            <Nav.Link>
              <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:"500px"}} type='text' className='rounded p-1' placeholder='Search Products Here'/></Nav.Link>
              }
            <Nav.Link> 
              <Link className='fw-bolder' style={{color:"white",textDecoration:"none"}} to={"/wishlist"}>
              <i className='fa-solid fa-heart text-danger'></i>wishlist<Badge>{yourWishlist?.length}</Badge></Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='fw-bolder' style={{color:"white",textDecoration:"none"}} to={"/cart"}>
              <i className='fa-solid fa-cart-plus text-success'></i>cart<Badge>{yourCart?.length}</Badge></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header