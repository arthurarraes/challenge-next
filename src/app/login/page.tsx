'use client';

import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context";
import { useRouter } from "next/navigation";

export default function Login() {
    const { login, error, user } = useContext(AuthContext); 
    const router = useRouter();
    const [logar, setLogar] = useState({ email: '', senha: '' });
    const [erro, setErro] = useState<string>();

    useEffect(() => {
        if (user) { // Redireciona apenas se o usuário estiver logado com sucesso
            router.push('/');
        }
    }, [user, router]);

    useEffect(() => {
        setErro("");
        console.log(error)
    }, []);

    // useEffect(() => {
    //     if (error) {
    //         setErro(error); // Atualiza o erro quando o contexto for atualizado
    //     }
    // }, [error]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLogar({ ...logar, [name]: value });
        setErro(""); // Limpa o erro ao digitar nos campos
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, senha } = logar;

        if (!email || !senha) {
            setErro('Todos os campos devem ser preenchidos.');
            return;
        }

        try {
            setErro(""); // Limpa o erro antes de tentar logar
            await login(logar); // Faz o login
            if (error) {
                setErro(error); // Atualiza o erro quando o contexto for atualizado
            }
        } catch (err) {
            console.error(err);
            setErro('Erro ao tentar fazer login.');
        }
    };

    return (
        <main className="bg-blue-500 flex justify-center items-center h-screen">
            <section className="bg-white rounded-lg p-8 m-3 w-2/5 flex flex-col items-center">
                <header className="text-2xl font-bold">Login</header>
                <form className="w-full mt-5 flex flex-col items-center" onSubmit={handleSubmit}>
                    <div id="erro" className="text-red-500 mt-2">{erro}</div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="m-2 w-4/5 p-2 rounded-lg border border-gray-300"
                        onChange={handleChange}
                        value={logar.email}
                    />
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="m-2 w-4/5 p-2 rounded-lg border border-gray-300"
                        onChange={handleChange}
                        value={logar.senha}
                    />
                    <input
                        type="submit"
                        value="Login"
                        className="bg-blue-500 text-white text-lg w-4/5 mt-4 py-2 rounded-lg"
                    />
                </form>
                <Link href="/registrar" className="mt-4">
                    <p>Você não possui uma conta? <span className="text-blue-500">Registrar</span></p>
                </Link>
            </section>
        </main>
    );
}
