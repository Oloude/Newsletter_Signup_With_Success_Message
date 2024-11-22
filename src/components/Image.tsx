 import heroMobile from '../assets/illustration-sign-up-mobile.svg'
 import heroDesktop from '../assets/illustration-sign-up-desktop.svg'

function Image() {
  return (
    <div className='rounded-b-3xl overflow-hidden lg:order-2'>
        <picture>
            <source media="(min-width:1024px )" srcSet={heroDesktop} />
            <img src={heroMobile} alt="" className='block w-full h-full'/>
        </picture>
    </div>
  )
}

export default Image