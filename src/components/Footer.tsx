import Image from 'next/image'
import logo from "../assets/logo.svg"

export default function Footer(){
    return(
        <footer className='flex justify-between items-center p-4 bg-[var(--light-blue)]'>
            <figure>
            <Image
                src={logo}
                alt="Logo"  className=" w-5/6 md:w-full mx-auto"/>
            </figure>
            <div>
                <p className='font-open-sans text-sm md:text-base font-normal'>Challenge FIAP - 2024</p>
                <p className='font-open-sans text-sm md:text-base font-normal'>Arthur Arraes</p>
                <p className='font-open-sans text-sm md:text-base font-normal'>Iago Victor</p>
                <p className='font-open-sans text-sm md:text-base font-normal'>Willian Moreira</p>
            </div>
        </footer>
    
)
    
}
