import React, { useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import DarkMode from '../DarkMode'
import { FaCaretDown } from 'react-icons/fa'
import RegisterButton from '../RegisterButton/RegisterButton'
import { useNavigate } from 'react-router-dom'

const Navbar = ({user}) => {

    const MenuLinks = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "Shop",
            link: "/shop"
        },
        {
            id: 3,
            name: "About",
            link: "/about"
        },
        // {
        //     id: 4,
        //     name: "Blogs",
        //     link: "/blogs"
        // },
    ]

    const DropdownLinks = [
        {
            id: 1,
            name: "Trending Products",
            link: "/#"
        },
        {
            id: 2,
            name: "Best Selling",
            link: "/#"
        },
        {
            id: 3,
            name: "Top Rated",
            link: "/#"
        },
        {
            id: 4,
            name: "Special Offers",
            link: "/#"
        },
    ]

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='py-4'>
            <div className="container flex justify-between items-center">
                <div className='flex items-center gap-4'>
                    <a className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl' href="#">Eshop</a>
                    
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-4'>
                            {MenuLinks.map((item, index) => (
                                <li key={index}>
                                    <a className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200' href={item.link}>
                                    {" "}
                                    {item.name}</a>
                                </li>
                            ))}

                            <li className='relative cursor-pointer group'>
                                <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 py-2 dark:hover:text-white'>
                                    Quick Links
                                    <span>
                                        <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                                    </span>
                                </a>

                                <div className='absolute z-[999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-900 p-2 dark:text-white shadow-md'>
                                    <ul className='space-y-2'>
                                        {DropdownLinks.map((item, index) => (
                                             <li key={index}>
                                                 <a href={item.link} className='text-gray-500 hover:text-black dark:hover:text-white duration-200 p-2 hover:bg-primary/20 inline-block w-full rounded-md font-semibold'>
                                                     {" "}
                                                     {item.name}</a>
                                             </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-between items-center gap-4 '>
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='Search' className='search-bar'/>
                        <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3'/>
                    </div>
                    
                    <div>
                        <DarkMode/>
                    </div>
                    <div>
                        {user ? (
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <span style={{ marginRight: "10px", fontWeight: "bold" }}>
                                {user.email[0].toUpperCase()}
                                </span>
                                <button onClick={() => auth.signOut()}>Logout</button>
                            </div>
                        ) : (
                        <RegisterButton/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar