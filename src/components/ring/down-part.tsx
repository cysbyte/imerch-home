import Image from 'next/image'
import upperPart from '/public/home/down-part.svg'

const DownPart = () => {
  return (
    <div className="w-full h-[400px] flex items-start justify-center">
        <Image className='w-[600px] h-[550px]' src={upperPart} alt=''/>
    </div>
  )
}

export default DownPart