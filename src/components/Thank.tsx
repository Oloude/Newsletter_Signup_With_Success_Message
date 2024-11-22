 import checkIcon from '../assets/icon-success.svg'

 type TProps = {
    handleToggle : ()=> void,
    email : string
 }

function Thank({handleToggle, email } : TProps) {
  return (
    <div className='flex flex-col bg-white mx-auto max-w-xl lg:rounded-2xl p-5 lg:p-9'>
        <img src={checkIcon} alt="" className='w-16 h-16 mb-8'/>
        <h2 className='text-4xl font-bold text-slateGrey mb-4  '>Thanks for subscribing!</h2>
        <p className='text-charcoalGrey text-base mb-80 lg:mb-5'>A confirmation email has been sent to <span className='font-semibold'>{email}.</span> Please open it and click the button inside to confirm your subscription.</p>
        <button onClick={handleToggle} className='bg-slateGrey p-3 rounded-md text-white font-medium text-base hover:bg-gradient-to-r hover:from-tomato hover:to-orange-600'>Dismiss message</button>
    </div>
  )
}

export default Thank

  