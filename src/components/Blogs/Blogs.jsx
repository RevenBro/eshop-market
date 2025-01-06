import React from 'react'
import Heading from '../Shared/Heading'

import Img1 from '../../assets/Images/blog-1.jpg'
import Img2 from '../../assets/Images/blog-2.jpg'
import Img3 from '../../assets/Images/blog-3.jpg'

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, accusamus cum dolore iste nisi quam quia velit quos quisquam officiis.",
    published: "Jan 20, 2024 by Jonathan",
    image: Img1,
    aosDelay: 0
  },
  {
    title: "How to choose perfect gadget",
    subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, accusamus cum dolore iste nisi quam quia velit quos quisquam officiis.",
    published: "Jan 25, 2024 by Sam",
    image: Img2,
    aosDelay: 200
  },
  {
    title: "How to choose perfect VR headset",
    subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, accusamus cum dolore iste nisi quam quia velit quos quisquam officiis.",
    published: "Feb 11, 2024 by Sabir",
    image: Img3,
    aosDelay: 400
  },
]

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"}/>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {BlogData.map((data) => (
            <div data-aos="fade-up" data-aos-delay={data.aosDelay} className='bg-white dark:bg-gray-900' key={data.title}>
              <div className='overflow-hidden rounded-2xl mb-2'>
                <img className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' src={data.image} alt="Blog Image"/>
              </div>

              <div className='space-y-2'>
                <p className='text-xs text-gray-500'>{data.published}</p>
                <p className='font-bold line-clamp-1'>{data.title}</p>
                <p className='line-clamp-2 text-sm text-gray-60 dark:text-gray-400'>{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs