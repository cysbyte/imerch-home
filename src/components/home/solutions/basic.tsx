import Image from 'next/image'
import check from '/public/home/check.svg'
import icon from '/public/home/influencer-basic-icon.svg'
import whiteArrow from '/public/home/white-arrow.svg'

const Basic = () => {
  return (
    <div data-aos="fade-in" className='w-full md:w-[80%] max-h-80 flex-1 basis-0 bg-gradient-to-r from-[#FFC8BD] to-[#DFB9D0] flex flex-col items-center justify-center text-center gap-5 rounded-3xl p-4 backdrop-blur-xl drop-shadow-lg'>
      <Image className='w-[66px] h-auto backdrop-blur-md drop-shadow-sm' src={icon} alt='' />
      <div className='flex flex-col gap-3'>
        <h2 className='text-white font-bold text-2xl'>Influencer Basic</h2>
        <div className='pl-2 flex items-center gap-3 w-full'>
          <Image className='w-[20px] h-auto' src={check} alt='' />
          <p className='text-white text-[0.72rem] text-left grow'>Limited number of Brand Kit and Product Generation monthly</p>
        </div>
        <div className='px-2 flex items-center  gap-3 w-full'>
          <Image className='w-[20px] h-auto' src={check} alt='' />
          <p className='text-white text-[0.72rem] text-left grow'>Fast global shipping service</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <p className='text-white text-sm'>Get Started</p>
        <Image className='w-[15px] h-auto' src={whiteArrow} alt='' />
      </div>
    </div>
  )
}

export default Basic