import React from 'react'

const Navbar = () => {

    const MenuLinks = [
        {
            id: 1,
            name: "Home",
            link: "#"
        },
        {
            id: 2,
            name: "Shop",
            link: "#shop"
        },
        {
            id: 3,
            name: "About",
            link: "#bout"
        },
        {
            id: 4,
            name: "Blogs",
            link: "#blogs"
        },
    ]
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='py-4'>
            <div className="container">
                <div>
                    <a className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl' href="#">Eshop</a>
                    <div>
                        <ul>
                            {MenuLinks.map((item, index) => {
                                <li></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar