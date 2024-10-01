import Image from 'next/image'
import Menu from './menu'
import { TrialButton } from './trial-button'
import logo from '/public/home/logo.svg'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center px-5 py-2'>
        <Image src={logo} width={150} height={40} alt='iMerch.ai'/>
        <Menu/>
        <TrialButton/>
    </div>
  )
}

export default Header