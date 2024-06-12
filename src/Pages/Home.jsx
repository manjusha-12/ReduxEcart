import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/Slices/productSlice'

 
const Home=()=>{
const dispatch = useDispatch()
const {allProducts,loading,error}=useSelector(state=>state.productReducer)
useEffect(()=>{
    dispatch(fetchProducts())
},[])

  return (
    <>
      <Header insideHome={true}/>
      <div className='container-fluid' style={{marginTop:"150px"}}>


       {
        loading ?
            <div className="text-center mt-5 fw-bolder">
              <Spinner animation="grow" />Loading.....
            </div>
       :
        <Row className='my-5'>
        {
          allProducts?.length>0?
          allProducts?.map(product=>(
            <Col key={product?.id} className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded' style={{ width: '18rem' }}>
      <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
        
        <div className='text-center mt-3'><Link to={`/${product?.id}/View`}> View More</Link></div>
      </Card.Body>
    </Card>
        </Col>
          ))
      :
      <div className="text-center fw-bolder mt-5 mb-5 text-danger">
        Product Not Fount!!!
      </div>  
      }
       </Row>
       }
      </div>
      </>
  )
}

export default Home