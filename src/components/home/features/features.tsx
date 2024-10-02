'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import FeatureItem from './feature-item'

const Features = () => {

    useEffect(()=>{
        AOS.init({
            easing: "ease-out-cubic",
      offset: 200,
        })
      })

    const data =[
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
            <div className='w-full py-52 px-28'>
                <div className='w-full flex flex-col justify-center items-center gap-3'>
                    <h6 data-aos='fade-up' data-aos-duration='500' className='text-base text-[#FFAC9B]'>Features</h6>
                    <h3 data-aos='fade-up' className='text-5xl font-extrabold text-white'>Powerful iMerch AI Model</h3>
                    <div data-aos='fade-up' className='text-center'>
                    <p className='text-sm text-white'>{`All of our services are powered by our cutting-edge 'iMerch AI', enabling`}</p>
                    <p className='text-sm text-white'>{`a personalised solutions with unmatched speed and convenience.`}</p>
                    </div>
                </div>
                <div data-aos="fade-left" className='flex items-center justify-center gap-7 h-[250px] mt-20'>
                    {
                        data.map((item)=>(
                            <FeatureItem key={item.id} id={item.id} title={item.title} desc={item.desc}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Features