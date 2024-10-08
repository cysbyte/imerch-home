import Image from 'next/image'
import Menu from './menu'
import { TrialButton } from './trial-button'
import logo from '/public/home/logo.svg'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md shadow-sm z-50 w-full flex justify-between items-center px-3 md:px-32 py-2'>
        <Image src={logo} className='w-[150px] h-auto' alt='iMerch.ai'/>
        <Menu/>
        <TrialButton/>
    </div>
  )
}

export default Header