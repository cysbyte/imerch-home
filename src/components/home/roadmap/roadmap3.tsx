import Image from 'next/image'
import Actions from '../../actions'
import bgAction from '/public/home/bg-action.svg'
import roadmap3a from '/public/home/roadmap3a.svg'
import roadmap3b from '/public/home/roadmap3b.svg'
import inputIcon from '/public/home/input-icon.svg'


const Roadmap3 = () => {
    return (
        <article className='w-full flex items-start gap-20 relative py-10 pl-20'>
            <Image className='-z-10 absolute w-[700px] h-[700px] left-[30%] top-[10%]' src={bgAction} alt='' />
            <div data-aos='fade-right' className='flex flex-col gap-6'>
                <h6 className='text-[#686EFF] text-sm'>Roadmap</h6>
                <h2 className='text-black text-4xl font-bold'>See how to bring your <br /> brand to life</h2>
                <Actions selectedIndex={3} />
                <div
                    className='w-[90%] flex items-center justify-center gap-8 px-2 py-1 border-[1px] border-black rounded-full'>
                    <div className='pl-2 flex items-center justify-center gap-1'>
                        <Image className='w-[20px] h-auto' src={inputIcon} alt='' />
                        <input
                            className='w-full appearance-none focus:outline-none rounded-sm input-placeholder'
                            type='text'
                            id='email'
                            placeholder={`Please enter your email`}
                        />
                    </div>
                    <div className='cursor-pointer h-auto bg-[#686EFF] text-white rounded-full flex justify-center items-center text-base gap-1 px-3 py-1.5'>
                        <p className=' text-nowrap'>Book a demo</p>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5003 13.5 19.5003C13.301 19.5003 13.1101 19.4213 12.9694 19.2806C12.8286 19.1398 12.7496 18.949 12.7496 18.7499C12.7496 18.5509 12.8286 18.36 12.9694 18.2193L18.4397 12.7499H3.75C3.55109 12.7499 3.36032 12.6709 3.21967 12.5303C3.07902 12.3896 3 12.1988 3 11.9999C3 11.801 3.07902 11.6103 3.21967 11.4696C3.36032 11.3289 3.55109 11.2499 3.75 11.2499H18.4397L12.9694 5.78055C12.8286 5.63982 12.7496 5.44895 12.7496 5.24993C12.7496 5.05091 12.8286 4.86003 12.9694 4.7193C13.1101 4.57857 13.301 4.49951 13.5 4.49951C13.699 4.49951 13.8899 4.57857 14.0306 4.7193L20.7806 11.4693C20.8504 11.539 20.9057 11.6217 20.9434 11.7127C20.9812 11.8038 21.0006 11.9014 21.0006 11.9999C21.0006 12.0985 20.9812 12.1961 20.9434 12.2871C20.9057 12.3782 20.8504 12.4609 20.7806 12.5306Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            <div data-aos='fade-left' className='w-full'>
                <Image className='w-[700px] h-auto mb-5' src={roadmap3a} alt='' />
                <Image className='w-[700px] h-auto' src={roadmap3b} alt='' />
            </div>

        </article>
    )
}

export default Roadmap3