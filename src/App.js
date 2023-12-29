import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Home from './components/Home'; 
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';
function App() {
const[isMobile,setisMobile]=useState(false);


  return(
    <>
    <BrowserRouter>
    
    <div className={ isMobile ? 'nav-links':'navbar'} onClick={()=>setisMobile(false)}>
      <div className='signup'><Link to='/signup'>Signup</Link> </div>
      <div className='about'><Link to='/about'>About</Link> </div>
      <div className='contact'><Link to='/contact'>Contact</Link> </div>
      </div>
    
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product' element={<Product />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />} />
    </Routes>
   <button className='mobile-icon' onClick={()=>setisMobile(!isMobile)}>
   {isMobile ? <h1>X</h1> : <h1>Menu</h1>
       }
   </button>
    </BrowserRouter>
    </>
  )
}

export default App;
