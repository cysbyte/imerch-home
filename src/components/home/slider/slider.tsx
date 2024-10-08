import Image from 'next/image'
import slider1 from '/public/home/slider/slider1.png'
import slider2 from '/public/home/slider/slider2.png'
import slider3 from '/public/home/slider/slider3.png'
import slider4 from '/public/home/slider/slider4.png'

const Slider = () => {
  return (
    <div className='max-w-7xl flex gap-0 overflow-hidden'>
        <Image className='w-[16%]' src={slider1} alt=''/>
        <Image className='w-[33%]' src={slider2} alt=''/>
        <Image className='w-[33%]' src={slider3} alt=''/>
        <Image className='w-[16%]' src={slider4} alt=''/>
    </div>
  )
}

export default Slider