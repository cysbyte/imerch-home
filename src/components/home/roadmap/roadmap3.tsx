import Image from 'next/image'
import Actions from '../../actions'
import bgAction from '/public/home/bg-action.svg'
import roadmap3a from '/public/home/roadmap3a.svg'
import roadmap3b from '/public/home/roadmap3b.svg'


const Roadmap3 = () => {
    return (
        <article className='w-full flex items-start gap-20 relative py-20 pl-20'>
            <Image className='-z-10 absolute w-[700px] h-[700px] left-[30%] top-[10%]' src={bgAction} alt='' />
            <div className='flex flex-col gap-6'>
                <h6 className='text-[#686EFF] text-sm'>Roadmap</h6>
                <h2 className='text-black text-4xl font-bold'>See how to bring your <br /> brand to life</h2>
                <Actions selectedIndex={3} />
            </div>
            <div className='w-full'>
                <Image className='w-[700px] h-auto mb-5' src={roadmap3a} alt=''/>
                <Image className='w-[700px] h-auto' src={roadmap3b} alt=''/>
            </div>
        </article>
    )
}

export default Roadmap3