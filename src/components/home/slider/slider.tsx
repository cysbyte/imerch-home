import Image from 'next/image'
import slider1 from '/public/home/slider1.svg'
import slider2 from '/public/home/slider2.svg'
import slider3 from '/public/home/slider3.svg'
import slider4 from '/public/home/slider4.svg'

const Slider = () => {
  return (
    <div className='w-full flex gap-2 overflow-hidden h-[250px]'>
        <Image  src={slider1} alt=''/>
        <Image src={slider2} alt=''/>
        <Image src={slider3} alt=''/>
        <Image src={slider4} alt=''/>
    </div>
  )
}

export default Slider