import {useEffect, useState} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ProductsShop from './pages/ProductsShop/ProductsShop'
import Home from './components/Home/Home'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import ForgotPassword from './Auth/ForgotPassword'

import AOS from 'aos';
import 'aos/dist/aos.css';
import './firebase/config'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

function App() {
  const auth = getAuth()
  const location = useLocation()
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const isLoginPage = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/forgot-password';

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100
    });
    AOS.refresh();
  }, [])

  useEffect(() => {
    const findOut = onAuthStateChanged(auth, (user) => {
      if(user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    });
    return findOut;
  },[auth])


  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      {!isLoginPage && <Navbar loggedIn={loggedIn}/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<ProductsShop/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>

      {!isLoginPage && <Footer/>}
      </div>
  )
}

export default App
