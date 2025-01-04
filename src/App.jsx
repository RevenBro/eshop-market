import './App.css'
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Products from './components/Products/Products'

import Headphone from './assets/Images/headphone.png'
import smartwatch2 from './assets/Images/smartwatch2-removebg-preview.png'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'

function App() {

  const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: Headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem praesentium voluptate cum libero.",
    bgColor: "#f42c37",
  };

  const BannerData2 = {
    discount: "40% OFF",
    title: "Happy Hours",
    date: "14 Jan to 28 Jan",
    image: smartwatch2,
    title2: "Smart Solo",
    title3: "Spring Sale",
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem praesentium voluptate cum libero.",
    bgColor: "#2dcc6f",
  }

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default App
