
const Menu = () => {
    return (
        <div className="w-auto hidden lg:block">
            <div className='flex gap-5 items-center justify-center border-[1px] border-black rounded-full p-1 text-base'>
                <div className='px-4 py-1 text-white rounded-full bg-black'>
                    Home
                </div>
                <div className='px-4 py-1 text-black rounded-full bg-white hover:bg-[#EFEFEF]'>
                    Feature
                </div>
                <div className='px-4 py-1 text-black rounded-full bg-white hover:bg-[#EFEFEF]'>
                    Roadmap
                </div>
                <div className='px-4 py-1 text-black rounded-full bg-white hover:bg-[#EFEFEF]'>
                    Plans
                </div>
            </div>
        </div>
    )
}

export default Menu