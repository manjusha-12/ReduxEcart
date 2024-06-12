import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:"300px"}} className='container w-100 mt-5'>
      <div className="d-flex justify-content-between">
        <div className="intro" style={{width:"400px"}}>
            <h5 className='head'><i className='fa-solid fa-cart-plus'></i>E-Cart</h5>
            <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
             <p>Code licensed MIT, docs CC BY 3.0.</p>
             <p>Currently v5.3.3.</p>
        </div>
        <div className="links d-flex flex-column">
            <h5 className='head'>Links</h5>
            <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Home</Link>
            <Link to={'/Home'} style={{textDecoration:"none",color:"white"}}>Cart</Link>
            <Link to={'/History'} style={{textDecoration:"none",color:"white"}}>Wishlist</Link>
        </div>
        <div className="guides d-flex flex-column">
            <h5 className='head'>Guides</h5>
            <a href="https://react-bootstrap.github.io/" target="_blank" style={{textDecoration:"none",color:"white"}}>React</a>
            <a href="https://react.dev/" target="_blank" style={{textDecoration:"none",color:"white"}}>React Bootstrap</a>
            <a href="https://react-bootstrap.github.io/" target="_blank" style={{textDecoration:"none",color:"white"}}>Routing</a>
        </div>
        <div className="contact d-flex flex-column">
            <h5 className='head'>Contact Us</h5>
            <div className='d-flex'>
              <input placeholder='enter your email here' type="text" className='me-1 rounded p-1' />
              <button className='btn btn-info ms-1'><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="icons d-flex justify-content-between mt-3">
              <a href="" style={{textDecoration:"none",color:"white"}} target='_blank'>
                <i className='fa-brands fa-twitter'></i>
              </a>
              <a href="" style={{textDecoration:"none",color:"white"}} target='_blank'>
                <i className='fa-brands fa-facebook'></i>
              </a>
              <a href="" style={{textDecoration:"none",color:"white"}} target='_blank'>
                <i className='fa-brands fa-instagram'></i>
              </a>
              <a href="" style={{textDecoration:"none",color:"white"}} target='_blank'>
                <i className='fa-brands fa-github'></i>
              </a>
              <a href="" style={{textDecoration:"none",color:"white"}} target='_blank'>
                <i className='fa-brands fa-whatsapp'></i>
              </a>
              <a href="" style={{textDecoration:"none",color:"white"}} target='_blank'>
                <i className='fa-brands fa-linkedin'></i>
              </a>
            </div>
        </div>
      </div>
        <p className='text-center mt-5'>Copright &copy; 2019-present Evan You & Vite Contributors</p>
    </div>
  )
}

export default Footer