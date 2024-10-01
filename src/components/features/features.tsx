import React from 'react'
import featureList from '/public/home/feature-list.svg'
import Image from 'next/image'

const Features = () => {
    return (

        <div className="w-full bg-[#6C71FF] bg-[url('/home/bg-features.svg')] bg-center bg-no-repeat bg-cover">
            <div className='w-full p-52'>
                <div className='w-full flex flex-col justify-center items-center gap-3'>
                    <h6 className='text-base text-[#FFAC9B]'>Features</h6>
                    <h3 className='text-5xl font-extrabold text-white'>Powerful iMerch AI Model</h3>
                    <p className='text-sm text-white'>{`All of our services are powered by our cutting-edge 'iMerch AI', enabling<br /> a personalised solutions with unmatched speed and convenience.`}</p>
                </div>
                <div className='flex items-center justify-center mt-20'>
                    <Image src={featureList} height={200} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Features