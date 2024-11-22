import Image from "./Image"
import Newsletter from "./Newsletter"

type TProps = {
    handleToggle : ()=> void,
    handleEmail : (value:string)=> void
 }

function MainContent({handleToggle, handleEmail} : TProps) {
  return (
    <section className="bg-white max-w-xl w-full sm:mx-auto  flex flex-col gap-8 lg:max-w-3xl lg:flex-row rounded-3xl lg:p-4">
        <Image/>
        <Newsletter handleToggle={handleToggle} handleEmail={handleEmail}/>
    </section>
  )
}

export default MainContent