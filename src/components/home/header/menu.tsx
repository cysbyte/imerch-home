'use client'

import { useState } from "react"

const Menu = () => {
    const items = [
        {
            id: 1,
            name: 'Home'
        },
        {
            id: 2,
            name: 'Feature'
        },
        {
            id: 3,
            name: 'Roadmap'
        },
        {
            id: 4,
            name: 'Plans'
        },
    ]
    const [currentItemIndex, setCurrentItemIndex] = useState(1)
    
    return (
        <div className="w-auto hidden lg:block">
            <div className='flex gap-5 items-center justify-center border-[2px] border-black rounded-full p-1 text-base'>
                {
                    items.map((item) => (
                        <div key={item.id}
                            onClick={() => setCurrentItemIndex(item.id)}
                            className={`cursor-pointer px-4 py-1 text-black rounded-full ${currentItemIndex === item.id ? 'bg-black text-white' : ' bg-white hover:bg-[#EFEFEF]'}`}>
                            {item.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu