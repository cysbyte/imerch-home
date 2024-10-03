'use client'

import { motion } from "framer-motion"
import arrowIcon from '/public/home/arrow-icon.svg'
import Image from "next/image"

export const TrialButton = () => {
    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 0px rgb(255,255,255)',
                boxShadow: '0px 0px 3px rgb(0,0,255)'
            }}
            className='cursor-pointer h-auto bg-[#686EFF] text-white rounded-full flex justify-center items-center text-base gap-1 px-3 py-1.5'>
            <p className='text-nowrap'>Start Trial</p>
            <Image className="w-[20px] h-auto" src={arrowIcon} alt=""/>

        </motion.div>
    )
}
