import JoinUsButton from "./join-us-button"

const JoinUs = () => {
  return (
    <div data-aos='fade-in' className="relative w-auto mt-14 pt-12 px-32 h-[630px] bg-[url('/home/bg-join-us.svg')] bg-center bg-no-repeat bg-contain flex flex-col items-center text-center">
      <div className='absolute w-full h-[60%] bottom-0 bg-gradient-to-b from-[#FFFFFF00] to-white'></div>
      {/* <Image className='absolute bottom-0' src={joinUsCover} alt=''/> */}
      <div className='bg-white bg-opacity-70 w-full h-full flex justify-center items-center'>
        <div className='flex flex-col px-32 items-center justify-center text-center gap-5'>
          <h3 className='font-bold text-[#686EFF]'>Latest Service</h3>
          <h1 className='text-2xl font-bold'>Join Us NOW and <br />Unlock 50% Off Instantly!</h1>
          <p className='text-sm'>iMerch now offers two use-cases:</p>
          <div className='flex items-center justify-center gap-6 mt-3'>
            <div className='bg-white px-2 py-3 rounded-lg'>
              <h3 className='text-[#686EFF] font-bold'>For Creators:</h3>
              <p className='text-sm text-[#898CA9] mt-3'>Turn social media into a brand.Create branding resonates with fans.Build a store reflects your identity. Connect with fans through products.</p>
            </div>
            <div className='bg-white px-2 py-3 rounded-lg'>
              <h3 className='text-[#686EFF] font-bold'>For Companies:</h3>
              <p className='text-sm text-[#898CA9] mt-3'>Easily launch your SWAG store. Set up merchandise based on profiles. Create SWAG for staff or customers. Get everything you need effortlessly.</p>
            </div>
          </div>
          <JoinUsButton/>

        </div>
      </div>
    </div>
  )
}

export default JoinUs