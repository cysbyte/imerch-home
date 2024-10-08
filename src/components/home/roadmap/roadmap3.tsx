import Image from 'next/image'
import Actions from '../../actions'
import bgAction from '/public/home/bg-action.svg'
import roadmap3a from '/public/home/roadmap3a.svg'
import roadmap3b from '/public/home/roadmap3b.png'
import EmailInput from './email-input'


const Roadmap3 = () => {
    return (
        <article className='w-full flex flex-col lg:flex-row items-center gap-20 relative py-10 lg:py-20 pl-10 md:pl-20 lg:pl-20 pr-10 md:pr-20 lg:pr-0'>
            <Image className='-z-10 absolute w-[700px] h-[700px] left-0 lg:left-[30%] top-[10%]' src={bgAction} alt='' />
            <div data-aos='fade-right' className='flex flex-col gap-6'>
                <h6 className='text-[#686EFF] text-lg font-semibold'>Roadmap</h6>
                <h2 className='text-black text-4xl font-bold'>See how to bring your <br /> brand to life</h2>
                <Actions selectedIndex={3} />
                <EmailInput/>
            </div>
            <div data-aos='fade-left' className='w-full'>
                <Image className='w-[700px] h-auto mb-5' src={roadmap3a} alt='' />
                <Image className='w-[700px] h-auto' src={roadmap3b} alt='' />
            </div>

        </article>
    )
}

export default Roadmap3