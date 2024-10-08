import Image from 'next/image'
import ins from '/public/home/mockup/ins.png'
import linkedin from '/public/home/mockup/linkedin.png'
import twitter from '/public/home/mockup/twitter.png'
import youtube from '/public/home/mockup/youtube.png'
import upperCircle from '/public/home/upper-circle.png'

const UpperPart = () => {
  return (
<div className="relative w-full flex items-start justify-center h-[300px] lg:h-[550px]">
        {/* <Image className='absolute bottom-0 left-0 w-full h-[400px] opacity-0' src={upperTexture} alt=''/> */}
        <Image className='absolute bottom-0 w-[800px] h-auto' src={upperCircle} alt=''/>

        <Image className='absolute top-[0%] left-[60%] w-[130px] lg:w-[260px] h-auto'  src={youtube} alt=''/>
        <Image className='absolute top-[10%] left-[50%] w-[130px] lg:w-[260px] h-auto'  src={ins} alt=''/>

        <Image className='absolute top-[0%] left-[10%] w-[130px] lg:w-[260px] h-auto'  src={linkedin} alt=''/>
        <Image className='absolute top-[10%] left-[20%] w-[130px] lg:w-[260px] h-auto'  src={twitter} alt=''/>

    </div>
  )
}

export default UpperPart