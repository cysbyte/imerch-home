'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import FeatureItem from './feature-item'

const Features = () => {

    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            offset: 200,
        })
    })

    const data = [
        {
            id: 1,
            title: 'Hyper-Customised',
            desc: 'iMerch AI analyses your unique style to craft a fully personalised brand.'
        },
        {
            id: 2,
            title: 'Lightning-Fast',
            desc: 'Our system rapidly responds to any modifications, minimising time costs.'
        },
        {
            id: 3,
            title: 'Ultra-Effortless',
            desc: ' We simplifies everything - from site, fan management to supply chain.'
        },
    ]

    return (

        <div className="w-full bg-[#6C71FF] bg-[url('/home/bg-features.svg')] bg-center bg-no-repeat bg-cover">
            <div className='w-full py-20 px-8 lg:py-52 lg:px-28'>
                <div className='w-full flex flex-col justify-center items-center gap-3'>
                    <h6 data-aos='fade-up' data-aos-duration='500' className='text-lg font-semibold text-[#FFAC9B]'>Features</h6>
                    <h3 data-aos='fade-up' className='text-4xl lg:text-5xl font-extrabold text-white text-center'>Powerful iMerch AI Model</h3>
                    <div data-aos='fade-up' className='text-center w-full'>
                        <p className='text-sm text-white w-[60%] text-center mx-auto'>{`All of our services are powered by our cutting-edge 'iMerch AI', enabling a personalised solutions with unmatched speed and convenience.`}</p>
                    </div>
                </div>
                <div data-aos="fade-left" className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-7 h-auto mt-20 p-10 lg:p-6'>
                    {
                        data.map((item) => (
                            <FeatureItem key={item.id} id={item.id} title={item.title} desc={item.desc} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Features