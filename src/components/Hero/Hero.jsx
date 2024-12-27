import Slider from 'react-slick'
import Image1 from '../../assets/Images/headphone.png'
import Image2 from '../../assets/Images/vr.png'
import Image3 from '../../assets/Images/macbook.png'
import Button from '../ButtonShared/Button'

const Hero = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  }

  const HeroData = [
    {
        id: 1,
        image: Image1,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone",
    },
    {
        id: 2,
        image: Image2,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Virtual",
    },
    {
        id: 3,
        image: Image3,
        subtitle: "Beats Solo",
        title: "Branded",
        title2: "Laptops",
    },
  ]
  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center '>

            <div className='container pb-8 sm:pb-0 '>
                <Slider {...settings}>
                    {HeroData.map((item) => (
                        <div key={item.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{item.subtitle}</h1>
                                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{item.title}</h1>
                                    <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{item.title2}</h1>
                                    <div>
                                        <Button text='Shop By Category' bgColor='bg-primary' textColor='text-white'/>
                                    </div>
                                </div>

                                <div className='order-1 sm:order-2 '>
                                    <div>
                                        <img src={item.image} alt="Product" className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.04)] relative z-40'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Hero