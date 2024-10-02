import Image from 'next/image'
import Menu from './menu'
import { TrialButton } from './trial-button'
import logo from '/public/home/logo.svg'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center px-5 py-2'>
        <Image src={logo} className='w-[150px] h-auto' alt='iMerch.ai'/>
        <Menu/>
        <TrialButton/>
    </div>
  )
}

export default Header