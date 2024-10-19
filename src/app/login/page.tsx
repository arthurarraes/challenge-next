'use client';

import Link from "next/link";

export default function Login() {
    function handleLogin(event: Event) {
        event.preventDefault(); // Evita o envio do formulário

        // Obtém todos os campos de entrada
        const campos = ['email', 'senha'];
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
        <main className="bg-blue-500 flex justify-center items-center h-screen">
            <section className="bg-white rounded-lg p-8 m-3 w-2/5 flex flex-col items-center">
                <header className="text-2xl font-bold">Login</header>
                <form className="w-full mt-5 flex flex-col items-center" onSubmit={(e) => handleLogin(e.nativeEvent)}>
                    <div id="erro" className="text-red-500 text-sm mt-2"></div>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="m-2 w-4/5 p-2 rounded-lg border border-gray-300"
                    />
                    <input
                        type="password"
                        id="senha"
                        placeholder="Senha"
                        className="m-2 w-4/5 p-2 rounded-lg border border-gray-300"
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
