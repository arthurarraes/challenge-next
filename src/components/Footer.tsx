import Image from 'next/image'
import logo from "../assets/logo.svg"

export default function Footer(){
    return(
        <footer className='flex justify-between items-center p-8 bg-[var(--light-blue)]'>
            <figure>
            <Image
                src={logo}
                width={300} 
                height={71}
                alt="Logo"/>
            </figure>
            <div>
                <p className='font-open-sans text-lg font-normal'>Challenge FIAP - 2024</p>
                <p className='font-open-sans text-lg font-normal'>Arthur Arraes</p>
                <p className='font-open-sans text-lg font-normal'>Iago Victor</p>
                <p className='font-open-sans text-lg font-normal'>Willian Moreira</p>
            </div>
        </footer>
    
)
    
}
