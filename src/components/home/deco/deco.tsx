'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView, Variants } from 'framer-motion'

const Deco = () => {
  const ref= useRef(null)
  const isInView = useInView(ref, {once: true})
  const animation = useAnimation()

  useEffect(()=>{
    if(isInView){
      animation.start('visible')
    }
  }, [isInView])

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 150
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }
  return (
    <div ref={ref} className="w-full mt-0 lg:mt-10 h-[400px] bg-[url('/home/deco.svg')] bg-center bg-no-repeat bg-contain flex flex-col items-center text-center">
      <motion.h1
        variants={variants}
        initial='hidden'
        animate={animation}
        transition={{duration: 0.3}}
        className='text-3xl md:text-4xl lg:text-5xl font-extrabold mt-32 tracking-wide'
      >
        Turning Your Idea Into<br /> Customised Merchandise
      </motion.h1>
      <motion.h3
        variants={variants}
        initial='hidden'
        animate='visible'
        transition={
          { delay: 0.25, duration: 0.3 }
        }
        className='text-sm text-[#898CA9] my-7 w-[80%] lg:w-[40%]'
      >iMerch.ai is a platform that bridges the gap between supply chains and innovative companies or individuals.
      </motion.h3>

      <motion.div
        variants={variants}
        initial='hidden'
        animate='visible'
        transition={
          { delay: 0.5, duration: 0.3}
        }
        // whileHover={{
        //   scale: 1.1,
        //   textShadow: '0px 0px 0px rgb(255,255,255)',
        //   boxShadow: '0px 0px 3px rgb(0,0,0)',
        // }}
        className='flex items-center justify-center gap-8 mx-10 lg:mx-2 px-2 py-1 border-[2px] border-black rounded-full'>
        <input
          className='bg-transparent w-full pl-3 appearance-none focus:outline-none rounded-sm input-placeholder m-auto'
          type='text'
          id='email'
          placeholder={`Enter your email`}
        />
        <div className='cursor-pointer h-full bg-[#686EFF] text-white rounded-full flex justify-center items-center text-base gap-1 px-3 py-1.5 '>
          <p className='h-full text-nowrap'>Book a demo</p>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5003 13.5 19.5003C13.301 19.5003 13.1101 19.4213 12.9694 19.2806C12.8286 19.1398 12.7496 18.949 12.7496 18.7499C12.7496 18.5509 12.8286 18.36 12.9694 18.2193L18.4397 12.7499H3.75C3.55109 12.7499 3.36032 12.6709 3.21967 12.5303C3.07902 12.3896 3 12.1988 3 11.9999C3 11.801 3.07902 11.6103 3.21967 11.4696C3.36032 11.3289 3.55109 11.2499 3.75 11.2499H18.4397L12.9694 5.78055C12.8286 5.63982 12.7496 5.44895 12.7496 5.24993C12.7496 5.05091 12.8286 4.86003 12.9694 4.7193C13.1101 4.57857 13.301 4.49951 13.5 4.49951C13.699 4.49951 13.8899 4.57857 14.0306 4.7193L20.7806 11.4693C20.8504 11.539 20.9057 11.6217 20.9434 11.7127C20.9812 11.8038 21.0006 11.9014 21.0006 11.9999C21.0006 12.0985 20.9812 12.1961 20.9434 12.2871C20.9057 12.3782 20.8504 12.4609 20.7806 12.5306Z" fill="white" />
          </svg>
        </div>
      </motion.div>
    </div>
  )
}

export default Deco