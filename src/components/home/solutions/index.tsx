import Image from 'next/image'
import Basic from './basic'
import Entrepreneur from './entrepreneur'
import Footer from './footer'
import Premium from './premium'
import bgSolutions from '/public/home/bg-solutions.svg'
import count1 from '/public/home/count1.svg'
import count2 from '/public/home/count2.svg'

const Solutions = () => {
  return (
    <article className='relative max-h-[3000px] lg:max-h-[2000px] overflow-y-hidden w-full bg-gradient-to-b from-[#D2D6F688] to-transparent flex flex-col items-center justify-center text-center px-10'>
      <Image className='absolute left-0 lg:left-[50%] top-[750px] w-[700px] h-auto' src={bgSolutions} alt='' />
      <Image className='absolute left-0 lg:-left-[15%] top-[1250px] w-[700px] h-auto' src={bgSolutions} alt='' />

      <h6 className='text-[#686EFF] text-lg font-semibold mt-32'>Plans</h6>
      <h2 className='text-4xl font-extrabold my-5'>Solutions for You</h2>
      <p className='text-sm'>Check out our packages and choose the one that suits you</p>
      <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-10 p lg:px-20 mt-20'>
        <Basic />
        <Premium />
        <Entrepreneur />
      </div>
      <div data-aos="flip-left" className='flex flex-col lg:flex-row justify-between items-center w-full z-10 mt-32 gap-10'>
        <div className='flex flex-col gap-3 items-start pl-10'>
          <h5 className='text-[#686EFF] font-bold'>Why choose us?</h5>
          <h2 className='text-3xl font-bold text-left'>Wide Variety & <br />Premium Quality</h2>
          <p className='text-[0.6rem] font-semibold'>We have plenty to offer</p>
        </div>
        <div className='flex items-center gap-2 '>
          <Image data-aos="flip-right" className='w-[50%] lg:w-64' src={count1} alt='' />
          <Image data-aos="flip-right" className='w-[50%] lg:w-64' src={count2} alt='' />
        </div>
      </div>
      <Footer />
    </article>
  )
}

export default Solutions