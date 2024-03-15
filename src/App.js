import React from 'react'
import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx'
const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
    </BrowserRouter>
   
     
    </div>
  )
}

export default App
