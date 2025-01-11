import React from 'react'

import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import Category2 from '../Category/Category2'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Products from '../Products/Products'
import Blogs from '../Blogs/Blogs'
import Partners from '../Partners/Partners'

import Headphone from '../../assets/Images/Headphone.png'
import smartwatch2 from '../../assets/Images/Smartwatch2-removebg-preview.png'

const Home = () => {

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
    <main>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
    </main>
  )
}

export default Home