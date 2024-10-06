import Image from 'next/image'
import upperPart from '/public/home/down-part.svg'
import downTexture from '/public/home/down-texture.png'
import downCircle from '/public/home/down-circle.png'

const DownPart = () => {
  return (
    <div className="relative w-full flex items-start justify-center h-[400px]">
        <Image className='absolute top-0 left-0 w-full h-[400px] opacity-0' src={downTexture} alt=''/>
        <Image className='absolute top-0 w-auto h-[250px]' src={downCircle} alt=''/>
    </div>
  )
}

export default DownPart