 import listIcon from '../assets/icon-list.svg'
import SignUp from './SignUp'

type TProps = {
    handleToggle : ()=> void,
    handleEmail : (value:string)=> void
 }

function Newsletter({handleToggle, handleEmail}: TProps) {
  return (
    <div className='flex flex-col p-6 lg:self-center'>
        <h1 className='text-slateGrey text-4xl  font-bold mb-5 lg:text-3xl'>Stay updated!</h1>
        <p className='text-charcoalGrey text-base mb-4'> Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className='flex flex-col gap-2 mb-10'>
            <li className='flex items-start gap-3'> <img src={listIcon} alt="" /> <p className='text-charcoalGrey text-base lg:text-sm'> Product discovery and building what matters</p></li>
            <li className='flex items-start gap-3'> <img src={listIcon} alt="" /> <p  className='text-charcoalGrey text-base lg:text-sm' >Measuring to ensure updates are a success </p></li>
            <li className='flex items-start gap-3'> <img src={listIcon} alt="" /> <p  className='text-charcoalGrey text-base  lg:text-sm'>And much more!</p></li>
        </ul>
        <SignUp handleToggle={handleToggle} onEmailChange={handleEmail}/>
        
    </div>
  )
}

export default Newsletter
 