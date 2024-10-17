import Link from "next/link";
import Image from 'next/image'
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.svg"

export default function Header(){
    // const estaLogado = localStorage.getItem('Logado') === 'True'
    return(
        <header className="flex bg-[var(--light-blue)] font-sora p-4 justify-around items-center text-3xl font-bold">
            <figure>
                <Image
                src={logo}
                width={300} 
                height={71}
                alt="Logo"/>
            </figure>
            <nav>
                <ul className="flex flex-row">
                    <a className="no-underline m-2 text-lg text-black" href=""><Link href={'/'}>Home</Link></a>
                    <a className="no-underline m-2 text-lg text-black" href=""><Link href={'/sobreNos'}>Sobre Nós</Link></a>
                    <a className="no-underline m-2 text-lg text-black" href=""><Link href={'/#ajuda'}>Ajuda</Link></a>
                </ul>
            </nav>
            {/* {estaLogado ? (
                <div>
                    <Link href='/conta'><FaUser/></Link>
                </div>
            ): (
                <div>
                <button className={"px-2 py-3 bg-[var(--grey)] rounded-md m-1"}><a className="no-underline text-base" href=""><Link className="text-white" href='/register'>Registrar</Link></a></button>
                    <button className={"px-2 py-5 bg-white rounded-md m-1"}><a className="no-underline text-base" href=""><Link className="text-[var(--grey)]" href='/login'>Login</Link></a></button>
                </div>
            )} */}
                <div>
                    <Link href='/conta'><FaUser/></Link>
                </div>
                <div className="flex items-center">
                    <button className={"px-3 py-2 flex items-center bg-[var(--grey)] rounded-md m-1"}><a className="no-underline text-base" href=""><Link className="text-white" href='/register'>Registrar</Link></a></button>
                    <button className={"px-3 py-2 flex items-center bg-white rounded-md m-1"}><a className="no-underline text-base" href=""><Link className="text-[var(--grey)]" href='/login'>Login</Link></a></button>
                </div>
        </header>
    )
}
