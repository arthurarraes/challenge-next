'use client';

import Link from "next/link";
import Modal from "./Modal";
import { useContext, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Importando ícone
import { AuthContext, UserProps } from "../context";

type VeiculoProps = {
  ano: number;
  marca: string;
  modelo: string;
  placa: string;
};

export default function Conta() {
  const [open, setOpen] = useState(false);
  const [placaDelete, setPlacaDelete] = useState("");
  const [erro, setErro] = useState<string>();
  const [formElements, setFormElements] = useState<HTMLFormElement[]>([]); // Para armazenar os formulários dos carros

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/veiculos/delete/${placaDelete}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert(`Veículo com placa ${placaDelete} excluído com sucesso!`);
        setOpen(false); // Fecha o modal
        const response = await fetch(`http://localhost:8080/veiculos/listar/${user?.email}`);
        const data: VeiculoProps[] = await response.json();
        setVeiculos(data);
      }
      else {
        const errorData = await response.json(); // Captura a resposta de erro
        console.error("Erro ao excluir:", errorData);
      }
    } catch (error) {
      console.error("Erro ao excluir veículo:", error);
    }
  };

  const idModal = (placa: string) => {
    setOpen(true);
    setPlacaDelete(placa);
  };

  
  const [veiculos,setVeiculos] = useState<VeiculoProps[]>()
  const {user, logout, error} = useContext(AuthContext)

  useEffect(() => {
    const chamadaApi = async () => {
      if (user?.email) {
        try {
          const response = await fetch(`http://localhost:8080/veiculos/listar/${user.email}`);
          const data: VeiculoProps[] = await response.json();
          setVeiculos(data);
        } catch (error) {
          console.error("Erro ao buscar veículos:", error);
        }
      }
    };
    chamadaApi();
  }, []);

  const [veiculo, setVeiculo] = useState<VeiculoProps>({ano: 0,
    marca: "",
    modelo: "",
    placa: ""})

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setVeiculo({...veiculo, [name]:value})}

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { ano, marca, modelo, placa } = veiculo;
        
    if (!ano || !marca  || !modelo || !placa) {
        setErro('Todos os campos devem ser preenchidos.');
        return;
    }
    const veiculoComEmail = {
      ...veiculo,
      email: user?.email, // Adiciona o email do usuário
    };
    const cabecalho={
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(veiculoComEmail)}
    try {
      const response = await fetch("http://localhost:8080/veiculos/cadastrar",cabecalho)
        if(response.ok){
          alert(`${veiculo.modelo} cadastrado com sucesso!`)
          setVeiculo({ano: 0,
            marca: "",
            modelo: "",
            placa: ""})
            const response = await fetch(`http://localhost:8080/veiculos/listar/${user?.email}`);
            const data: VeiculoProps[] = await response.json();
            setVeiculos(data);
        }else{
          console.log(await response.text()); // Verifique a resposta como texto
          console.log(user?.email)
          const errorData = await response.json(); // Captura a resposta de erro
          console.error("Erro ao cadastrar:", errorData);
        }
        } catch (err) {
          console.error(err);
        }
    };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <section className="p-6 bg-white rounded-lg shadow">
        <header className="text-lg font-bold mb-4">Perfil</header>
        <form className="flex flex-col">
          <label>Nome Completo</label>
          <input type="text" placeholder={user?.userName} className="p-2 border rounded mb-2" value={user?.userName}/>
          <label>Cep</label>
          <input type="text" placeholder={user?.cep} className="p-2 border rounded mb-2" value={user?.cep}/>
          <label>Telefone</label>
          <input type="tel" placeholder="11 99999-9999" className="p-2 border rounded mb-2" value={user?.telefone}/>
          <label>Email</label>
          <input type="email" placeholder="teste@email.com" className="p-2 border rounded mb-2"value={user?.email}/>
          <label>Senha</label>
          <input type="password" placeholder="******" className="p-2 border rounded mb-4" value={user?.senha}/>
          <Link href="/">
            <button type="button" className="bg-blue-500 text-white p-2 rounded w-full" onClick={logout}>
              Sair
            </button>
          </Link>
        </form>
      </section>

      <section className="p-6 bg-white rounded-lg shadow">
        <header className="text-lg font-bold mb-4">Carro</header>
        <form className="flex flex-col" onSubmit={handleSubmit}>
        <div id="erro" className="text-red-500 mt-2">{erro || error}</div>
          <input type="text" id="Marca" name="marca" placeholder="Marca" className="p-2 border rounded mb-2" onChange={handleChange}/>
          <input type="text" id="Modelo" name="modelo" placeholder="Modelo" className="p-2 border rounded mb-2" onChange={handleChange}/>
          <input type="text" id="Placa" name="placa" minLength={7} maxLength={7} placeholder="Placa" className="p-2 border rounded mb-2" onChange={handleChange}/>
          <input type="text" id="Ano" name="ano" minLength={4} maxLength={4} placeholder="Ano" className="p-2 border rounded mb-4" onChange={handleChange}/>
          <input
            type="submit"
            value="Adicionar"
            className="bg-blue-500 text-white p-2 rounded cursor-pointer"
          />
        </form>
        <div className="pt-3">
          {veiculos?.map((veiculo, index) => (
            <form className="flex flex-col mb-4 p-4 border rounded-lg bg-gray-50 shadow-md">
              <label className="mt-2">Marca</label>
              <input type="text" value={veiculo.marca} readOnly className="p-2 border rounded" />
              <label className="mt-2">Modelo</label>
              <input type="text" value={veiculo.modelo} readOnly className="p-2 border rounded" />
              <label className="mt-2">Placa</label>
              <input type="text" value={veiculo.placa} readOnly className="p-2 border rounded" />
              <label className="mt-2">Ano</label>
              <input type="text" value={veiculo.ano.toString()} readOnly className="p-2 border rounded" />
              <button type="button" className="mt-2 bg-red-500 text-white p-2 rounded" onClick={() => idModal(veiculo.placa)}>
                Remover
              </button>
            </form>
          ))}
        </div>
      </section>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <FaTrashAlt size={56} className="mx-auto text-red-500" />
          <h3 className="text-lg font-black text-gray-500">Excluir Carro?</h3>
          <p className="text-gray-500 text-sm">Você tem certeza que deseja excluir?</p>
        </div>
        <div className="flex gap-4 pt-2">
          <button className="btn btn-danger w-full" onClick={handleDelete}>Excluir</button>
          <button className="btn btn-light w-full" onClick={() => setOpen(false)}>Cancelar</button>
        </div>
      </Modal>
    </section>
  );
}
