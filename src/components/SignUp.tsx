import { useState } from "react"

type TProps = {
    handleToggle : ()=> void,
    onEmailChange : (value:string)=> void
 }

 const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function SignUp({handleToggle, onEmailChange}: TProps) {
    const [email, setEmail] = useState('')
    const [error, setError]  = useState('')

    function handleEmail(value:string){
        setEmail(value)
    }

    function handleSubmit(e:React.FormEvent){
        e.preventDefault()

        if(email.trim() && regex.test(email)){
            setError('')
            handleToggle()
            onEmailChange(email)
        }else{
            setError('Valid email required')
        }

    }

    
  return (
    <form action="" className="mb-6 flex flex-col" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-3 mb-2">
            <label htmlFor="" className="text-xs font-semibold text-slateGrey">Email address  </label>
            <span className="text-xs font-medium text-tomato self-end">{error}</span>
        </div>
        <input onChange={(e)=>handleEmail(e.target.value)} value={email} type="email" name="" id="" placeholder="email@company.com" className={`${
            error ? 'border-tomato bg-tomato bg-opacity-20 text-tomato placeholder:text-tomato' : ''
        }  text-grey border  border-gey rounded-md p-3 w-full outline-none mb-5 focus-within:border-charcoalGrey placeholder:text-grey  `}/>
   <button className='bg-slateGrey p-3 rounded-md text-white font-medium text-base hover:bg-gradient-to-r hover:from-tomato hover:to-orange-600'>Subscribe to monthly newsletter</button>
    </form>
  )
}

export default SignUp