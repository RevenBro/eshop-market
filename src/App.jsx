import {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import {collection, addDoc} from 'firebase/firestore'
// import { db } from './Firebase/Firebase'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ProductsShop from './components/ProductsShop/ProductsShop'
import Home from './components/Home/Home'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // const addProduct = async () => {
  //   try {
  //     await addDoc(collection(db, "products"), {
  //       name: "Telefon",
  //       price: 200,
  //       description: "Zamonaviy smartfon",
  //     });
  //     console.log("Mahsulot muvaffaqiyatli qo'shildi!");
  //   } catch (e) {
  //     console.error("Xatolik yuz berdi: ", e);
  //   }
  // };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100
    });
    AOS.refresh();
  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<ProductsShop/>}/>
      </Routes>

      <Footer/>
      </div>
  )
}

export default App
