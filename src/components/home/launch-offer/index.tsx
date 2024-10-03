import Image from 'next/image'
import launchOffer from '/public/home/launch-offer.svg'

const LaunchOffer = () => {
  return (
    <article className='mt-14 w-full'>
        <Image src={launchOffer} alt=''/>
    </article>
  )
}

export default LaunchOffer