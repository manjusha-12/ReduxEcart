import { Routes ,Route, Navigate} from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'

function App() {

  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/wishlist" element={<Wishlist/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/:id/View" element={<View/>}/>
       {/* page not found */}
       <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
