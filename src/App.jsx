import Category from './Pages/Category';
import Navbar from './Components/Navbar';
import Products from './Pages/Products';
import Show from './Pages/Show';
import Cart from './Pages/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])
  function addToCart(item, method) {
    //console.log(item)
    if (method == "add")
      setCart(prevCart => (
        [...prevCart, item]
      ))
    else
    {
      const index = cart.indexOf(item);  
      const newData = [...cart]
      newData.splice(index, 1);
      setCart(newData)
    }
  }
  function checkIfExist(id) {
    var item = cart.find(item => item.id == id)
    console.log(item)
    if (item != null) return true
    else return false
  }
  //console.log(cart)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className='container'>
            <Routes>
              <Route path='/Category' element={<Category />}></Route>
              <Route path='/Product' element={<Products />}></Route>
              <Route path='/Show' element={<Show addCart={addToCart} checkItem={checkIfExist} />}></Route>
              <Route path='/Cart' element={<Cart data={cart} />}></Route>
            </Routes>
          
          </div>
        </BrowserRouter>
    </div>
  )
}

export default App
