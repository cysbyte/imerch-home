import Image from 'next/image'
import Actions from '../../actions'
import bgAction from '/public/home/bg-action.svg'
import roadmap1a from '/public/home/roadmap1a.png'
import roadmap1b from '/public/home/roadmap1b.svg'


const Roadmap1 = () => {
    return (
        <article className='w-full flex flex-col lg:flex-row items-center gap-20 relative py-10 lg:py-20 pl-10 md:pl-20 lg:pl-20 pr-10 md:pr-20 lg:pr-0 mt-14'>
            <Image className='-z-10 absolute w-[700px] h-[700px] left-0 lg:left-[30%] top-[10%]' src={bgAction} alt='' />
            <div data-aos='fade-right' className='flex flex-col gap-6 w-full'>
                <h6 className='text-[#686EFF] text-sm'>Roadmap</h6>
                <h2 className='text-black text-4xl font-bold'>See how to bring your <br /> brand to life</h2>
                <Actions selectedIndex={1} />
            </div>
            <div data-aos='fade-left' className='w-full'>
                <Image className='w-[700px] h-auto mb-5 mx-auto' src={roadmap1a} alt=''/>
                <Image className='w-[700px] h-auto mx-auto' src={roadmap1b} alt=''/>
            </div>
        </article>
    )
}

export default Roadmap1