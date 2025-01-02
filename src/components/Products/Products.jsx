import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

import Image1 from '../../assets/Images/p-1.jpg'
import Image2 from '../../assets/Images/p-2.jpg'
import Image3 from '../../assets/Images/p-3.jpg'
import Image4 from '../../assets/Images/p-4.jpg'
import Image5 from '../../assets/Images/p-5.jpg'
import Image6 from '../../assets/Images/p-7.jpg'
import Image7 from '../../assets/Images/p-9.jpg'

const ProductsData = [
  {
    id: 1,
    img: Image1,
    title: "Boat Headphone",
    price: "120$",
    aosDelay: "0"
  },
  {
    id: 2,
    img: Image2,
    title: "Rocky Mountain",
    price: "420$",
    aosDelay: "200"
  },
  {
    id: 3,
    img: Image3,
    title: "Goggles",
    price: "320$",
    aosDelay: "400"
  },
  {
    id: 4,
    img: Image4,
    title: "Printed",
    price: "220$",
    aosDelay: "600"
  },
]

const ProductsData2 = [
  {
    id: 1,
    img: Image5,
    title: "Boat Headphone",
    price: "120$",
    aosDelay: "0"
  },
  {
    id: 2,
    img: Image6,
    title: "Rocky Mountain",
    price: "420$",
    aosDelay: "200"
  },
  {
    id: 3,
    img: Image7,
    title: "Goggles",
    price: "320$",
    aosDelay: "400"
  },
  {
    id: 4,
    img: Image3,
    title: "Printed",
    price: "220$",
    aosDelay: "600"
  },
]

const Products = () => {
  return (
    <div>
        <div className="container">
            <Heading title="Our Products" subtitle="Explore Our Products"/>

            <ProductCard data={ProductsData}/>
            <ProductCard data={ProductsData2}/>
        </div>
    </div>
  )
}

export default Products