'use client'

import Link from "next/link";
import Image from 'next/image'
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "@/app/context";


export default function Header(){
    const {user} = useContext(AuthContext)
    return(
        <header className="flex flex-col md:flex-row bg-[var(--light-blue)] font-sora p-4 items-center font-bold md:justify-around">
            <Link href={'/'}>
                <Image
                src={logo}
                alt="Logo" className=" w-9/12 md:w-5/6 mx-auto"/>
            </Link>
                
            <nav>
                <ul className="flex flex-row">
                    <a className="no-underline m-2 md:text-lg text-black" href=""><Link href={'/'}>Home</Link></a>
                    <a className="no-underline m-2 md:text-lg text-black" href=""><Link href={'/sobreNos'}>Sobre Nós</Link></a>
                    <a className="no-underline m-2 md:text-lg text-black" href=""><Link href={'/#ajuda'}>Ajuda</Link></a>
                </ul>
            </nav>
            {user?.email ? (
                <div className="text-blue-500">
                    <Link href='/conta'><FaUser size={28}/></Link>
                </div>
            ): (
                <div className="flex items-center">
                    <button className={"px-2 md:px-3 py-1 md:py-2 flex items-center bg-[var(--grey)] rounded-md m-1"}><a className="no-underline text-base" href=""><Link className="text-white" href='/registrar'>Registrar</Link></a></button>
                    <button className={"px-2 md:px-3 py-1 md:py-2 flex items-center bg-white rounded-md m-1"}><a className="no-underline text-base" href=""><Link className="text-[var(--grey)]" href='/login'>Login</Link></a></button>
                </div>
            )}
        </header>
    )
}