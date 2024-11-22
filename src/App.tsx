import { useState } from "react";
import MainContent from "./components/MainContent";
import Thank from "./components/Thank";

export default function App() {

 const [toggleThank, setToggleThank ] = useState(false)
 const [email, setEmail] = useState('')

 function handleToggle(){
  setToggleThank(prev => !prev)
 }

 function handleEmail(value:string){
  setEmail(value)
 }
  return (
    <main className="font-Roboto min-h-screen   flex  lg:justify-center lg:items-center  bg-slateGrey">
     {toggleThank ? <Thank handleToggle={handleToggle} email={email}/> : <MainContent handleToggle={handleToggle} handleEmail={handleEmail}/>}
    </main>
  )
}