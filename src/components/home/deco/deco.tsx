import EmailInput from './email-input'

const Deco = () => {
  return (
    <div className="w-full h-[400px] bg-[url('/home/deco.svg')] bg-center bg-no-repeat bg-contain flex flex-col items-center text-center">
        <h1 className='text-5xl font-extrabold mt-32'>Turning Your Idea into<br/> customised Merchandise</h1>
        <h3 className='text-sm text-[#898CA9] my-7'>iMerch.ai is a platform that bridges the gap between supply chains and <br/> innovative companies or individuals. </h3>
        <EmailInput/>
    </div>
  )
}

export default Deco