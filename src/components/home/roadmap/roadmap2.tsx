import Image from 'next/image'
import Actions from '../../actions'
import bgAction from '/public/home/bg-action.svg'
import roadmap2 from '/public/home/roadmap2.svg'


const Roadmap2 = () => {
    return (
        <article className='w-full flex flex-col lg:flex-row items-start gap-20 relative py-10 lg:py-20 pl-5 lg:pl-20 pr-5 lg:pr-0'>
            <Image className='-z-10 absolute w-[700px] h-[700px] left-0 lg:left-[30%] top-[10%]' src={bgAction} alt='' />
            <div data-aos='fade-right' className='flex flex-col gap-6'>
                <h6 className='text-[#686EFF] text-sm'>Roadmap</h6>
                <h2 className='text-black text-4xl font-bold'>See how to bring your <br /> brand to life</h2>
                <Actions selectedIndex={2} />
            </div>
            <div data-aos='fade-left' className='w-full'>
                <Image className='w-[700px] h-auto mb-5' src={roadmap2} alt=''/>
            </div>
        </article>
    )
}

export default Roadmap2