import Image from 'next/image'
import downCircle from '/public/home/down-circle.png'
import downTexture from '/public/home/down-texture.png'

const DownPart = () => {
  return (
    <div className="relative w-full flex items-start justify-center h-[400px]">
        <Image className='absolute top-0 left-0 w-full h-[400px] opacity-0' src={downTexture} alt=''/>
        <Image className='absolute top-0 w-[800px] h-auto' src={downCircle} alt=''/>
    </div>
  )
}

export default DownPart