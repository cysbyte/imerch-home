import Image from 'next/image'
import actionIconSelected1 from '/public/home/action-icon-selected1.svg'
import actionIconSelected2 from '/public/home/action-icon-selected2.svg'
import actionIconSelected3 from '/public/home/action-icon-selected3.svg'
import actionIcon1 from '/public/home/action-icon1.svg'
import actionIcon2 from '/public/home/action-icon2.svg'
import actionIcon3 from '/public/home/action-icon3.svg'

const Actions = ({selectedIndex}:
    {selectedIndex: number}) => {
    const data = [
        {
            id: 1,
            title: 'Upload your social profiles',
            desc: 'Just upload your website or social profile, and iMerch AI will show you brand kit and merch that speaks to your audience.'
        },
        {
            id: 2,
            title: 'Get your content analysed',
            desc: 'We produce your custom merch fast and with top-notch quality with global shipping and warehousing.'
        },
        {
            id: 3,
            title: 'Bring your brand kit to life',
            desc: 'iMerch builds your online store in no time, with your brand’s look and products front and centre.'
        }
    ]

    const getActionIcon = (id: number) => {
        if (id === 1) {
            return selectedIndex === 1 ? actionIconSelected1 : actionIcon1;
        } else if (id === 2) {
            return selectedIndex === 2 ? actionIconSelected2 : actionIcon2;
        } else {
            return selectedIndex === 3 ? actionIconSelected3 : actionIcon3;
        }
    }
    return (
        <div className='flex flex-col items-start justify-center gap-5 mt-4'>
            {data.map((item)=>(
                <div className='h-[100px] flex items-start gap-3' key={item.id}>
                    <Image className='w-[50px] h-auto' src={getActionIcon(item.id)} alt=''/>
                    <div>
                        <h3 className='font-bold'>{item.title}</h3>
                        <p className='text-sm text-[#898CA9] mt-2'>{item.desc}</p>
                    </div>
                </div>)
            )}

        </div>
    )
}

export default Actions