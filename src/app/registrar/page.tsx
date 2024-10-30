'use client'

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { useRouter } from "next/navigation";

export default function Registrar() {
    const { register, error } = useContext(AuthContext);
    const router = useRouter();
    const [erro, setErro] = useState<string>("")
    const [registro, setRegistro] = useState({ userName: "", cep: "", telefone: "", email: "", senha: "" });

    useEffect(() => {
        if (error) {
            setErro(error); 
        }
    }, [error]);

    useEffect(() => {
            setErro("");
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegistro({ ...registro, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { userName, cep, telefone, email, senha } = registro;
        if (!userName || !cep || !telefone || !email || !senha) {
            setErro('Todos os campos devem ser preenchidos.');
            return;
        }
        try {
            await register(registro);
            setRegistro({ userName: "", cep: "", telefone: "", email: "", senha: "" });
            if(error == ''  && erro == ""){
                router.push('/')
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="bg-blue-500 flex justify-center items-center h-screen">
            <section className="bg-white rounded-lg py-5 m-5 w-9/12 md:w-3/6 flex flex-col items-center">
                <header className="text-2xl font-bold">Registrar</header>
                <form className="w-full mt-2 flex flex-col items-center" onSubmit={handleSubmit}>
                    <div id="erro" className="text-red-500 mt-2">{erro}</div>
                    <input type="text" name="userName" placeholder="Nome Completo" className="m-2 w-4/5 p-2 rounded-lg border border-gray-300" value={registro.userName} onChange={handleChange} />
                    <input type="text" minLength={9} maxLength={9} name="cep" placeholder="CEP" className="m-2 w-4/5 p-2 rounded-lg border border-gray-300" value={registro.cep} onChange={handleChange} />
                    <input type="text" maxLength={11} name="telefone" placeholder="Telefone" className="m-2 w-4/5 p-2 rounded-lg border border-gray-300" value={registro.telefone} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" className="m-2 w-4/5 p-2 rounded-lg border border-gray-300" value={registro.email} onChange={handleChange} />
                    <input type="password" name="senha" placeholder="Senha" className="m-2 w-4/5 p-2 rounded-lg border border-gray-300" value={registro.senha} onChange={handleChange} />
                    <input type="submit" value="Registrar" className="bg-blue-500 text-white text-lg w-4/5 mt-4 py-2 rounded-lg" />
                </form>
                <Link href='/login' className="mt-4">
                    <p className="text-sm">Você já possui uma conta? <span className="text-blue-500">Entrar</span></p>
                </Link>
            </section>
        </div>
    );
}
