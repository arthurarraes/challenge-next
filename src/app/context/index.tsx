'use client'

import { createContext, useState } from "react";

export type UserProps = {
    cep: string,
    telefone: string,
    email: string,
    senha: string,
    userName: string
}

type AuthContextProps = {
    user: UserProps | null,
    login: (credentials: { email: string, senha: string }) => Promise<void>,
    register: (userData: UserProps) => Promise<void>,
    logout: () => void,
    error: string | null
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState<string | null>(null);

    const login = async (credentials: { email: string; senha: string }) => {
        setError(null);

        try {
            const loginResponse = await fetch('http://localhost:8080/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });

            if (!loginResponse.ok) {
                const errorMessage = await loginResponse.text();
                setError(`Erro ao fazer login: ${errorMessage}`);
                return;
            }

            const userData = await loginResponse.json();
            const userFiltered: UserProps = {
                cep: userData.cep,
                telefone: userData.telefone,
                email: userData.email,
                senha: userData.senha,
                userName: userData.userName
            };

            setUser(userFiltered);
        } catch (error) {
            setError('Erro de conexão. Verifique sua rede e tente novamente.');
        }
    };

    const register = async (userData: UserProps) => {
        setError(null);

        try {
            const registerResponse = await fetch('http://localhost:8080/usuarios/cadastro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (!registerResponse.ok) {
                const errorMessage = await registerResponse.text();
                if (registerResponse.status === 400) {
                    setError('Dados inválidos. Verifique as informações e tente novamente.');
                } else if (registerResponse.status === 409) {
                    setError('Usuário já cadastrado.');
                } else if (registerResponse.status === 500) {
                    setError('Erro no servidor. Tente novamente mais tarde.');
                } else {
                    setError(`Erro desconhecido: ${errorMessage}`);
                }
                return;
            }

            const newUser = await registerResponse.json();
            setUser(newUser);
        } catch (error) {
            setError('Erro de conexão. Verifique sua rede e tente novamente.');
        }
    };

    const logout = () => {
        setUser(null);
        setError(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };