'use client'

import Link from "next/link";

export default function Registrar() {
    function login(event: Event) {
        event.preventDefault(); // Evita o envio do formulário

        const campos = ['nome', 'cep', 'telefone', 'email', 'senha'];
        let valido = true;

        campos.forEach(campoId => {
            const elemento = document.getElementById(campoId) as HTMLInputElement;
            if (!elemento.value.trim()) {
                elemento.classList.add('bg-red-100', 'border-red-500'); // Erro de input
                valido = false;
            } else {
                elemento.classList.remove('bg-red-100', 'border-red-500');
            }
        });

        const erroElement = document.getElementById('erro');
        if (!valido) {
            if (erroElement) erroElement.textContent = 'Todos os campos devem ser preenchidos.';
            return;
        }

        localStorage.setItem('Logado', 'True');
        window.location.href = '/';
    }

    return (
        <div className="bg-blue-500 flex justify-center items-center h-screen">
            <section className="bg-white rounded-lg p-8 m-5 w-2/5 flex flex-col items-center">
                <header className="text-2xl font-bold">Registrar</header>
                <form className="w-full mt-5 flex flex-col items-center" onSubmit={(e) => login(e.nativeEvent)}>
                    <div id="erro" className="text-red-500 text-sm mt-2"></div>
                    <input type="text" id="nome" placeholder="Nome Completo" className="m-2 w-4/5 p-2 rounded-lg border border-gray-300" />
                    <input type="text" id="cep" placeholder="CEP" className="m-2 w-4/5 p-2 rounded-lg border border-gray-300" />
                    <input type="tel" id="telefone" placeholder="Telefone" className="m-2 w-4/5 p-2 rounded-lg border border-gray-300" />
                    <input type="email" id="email" placeholder="Email" className="m-2 w-4/5 p-2 rounded-lg border border-gray-300" />
                    <input type="password" id="senha" placeholder="Senha" className="m-2 w-4/5 p-2 rounded-lg border border-gray-300" />
                    <input type="submit" value="Registrar" className="bg-blue-500 text-white text-lg w-4/5 mt-4 py-2 rounded-lg" />
                </form>
                <Link href='/login' className="mt-4">
                    <p>Você já possui uma conta? <span className="text-blue-500">Entrar</span></p>
                </Link>
            </section>
        </div>
    );
}
