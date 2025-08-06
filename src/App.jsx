import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Nav from "./Components/Nav";
import Programs from './Components/Programs'

const App = () => {
  return(
    
<div>
  <Nav/>
  
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/program' element={<Programs/>}/>

</Routes>
</div>

    
  )

  
  
}

export default App