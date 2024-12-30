import './App.css'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
    </div>
  )
}

export default App
