'use client'

import Image from 'next/image'
import arrowIcon from '/public/home/arrow-icon.svg'
import {motion} from 'framer-motion'

const JoinUsButton = () => {
  return (
    <motion.div 
    whileHover={{
        scale: 1.1,
        textShadow: '0px 0px 0px rgb(255,255,255)',
        boxShadow: '0px 0px 1px rgb(0,0,255)'
    }}
    className='z-10 flex items-center justify-center gap-2 bg-[#686EFF] w-full py-3 rounded-full mt-4 drop-shadow-lg'>
    <p className='text-white font-bold text-2xl cursor-pointer'>Join Us</p>
    <Image className="w-[25px] h-auto" src={arrowIcon} alt="" />
  </motion.div>
  )
}

export default JoinUsButton