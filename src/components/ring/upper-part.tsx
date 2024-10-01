import Image from 'next/image'
import upperPart from '/public/home/upper-part.svg'

const UpperPart = () => {
  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-[url('/home/bg-ring.svg')] bg-center bg-no-repeat bg-cover">
        <Image className='w-[700px] h-[500px] mb-6' src={upperPart} alt=''/>
    </div>
  )
}

export default UpperPart