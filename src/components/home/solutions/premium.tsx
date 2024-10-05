import Image from 'next/image'
import React from 'react'
import icon from '/public/home/influencer-premium-icon.svg'
import check from '/public/home/check.svg'
import whiteArrow from '/public/home/white-arrow.svg'

const Premium = () => {
  return (
    <div data-aos="fade-in" className=' max-h-[25rem] flex-1 bg-gradient-to-r from-[#9A84DE] to-[#7379FF] flex flex-col items-center justify-center text-center gap-5 rounded-3xl px-4 py-5 backdrop-blur-lg drop-shadow-xl shadow-xl'>
      <h1 className='px-2 text-white text-left w-full text-[0.78rem]'>RECOMMENDED</h1>
      <Image className='w-[66px] h-auto backdrop-blur-xl drop-shadow-sm' src={icon} alt='' />
      <div className='flex flex-col gap-3'>
        <h2 className='text-white font-bold text-2xl'>Influencer <br/> Premium</h2>
        <div className='pl-2 flex items-center gap-3 w-full'>
          <Image className='w-[20px] h-auto' src={check} alt='' />
          <p className='text-white text-[0.72rem] text-left grow'>UNLIMITED Brand Kit and Product Generation</p>
        </div>
        <div className='px-2 flex items-center  gap-3 w-full'>
          <Image className='w-[20px] h-auto' src={check} alt='' />
          <p className='text-white text-[0.72rem] text-left grow'>10 services for senior designers monthly</p>
        </div>
        <div className='px-2 flex items-center  gap-3 w-full'>
          <Image className='w-[20px] h-auto' src={check} alt='' />
          <p className='text-white text-[0.72rem] text-left grow'>Fast shipping and international warehousing</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <p className='text-white text-sm'>Get Started</p>
        <Image className='w-[15px] h-auto' src={whiteArrow} alt='' />
      </div>
    </div>
  )
}

export default Premium