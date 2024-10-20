'use client';

import Link from "next/link";
import Modal from "./Modal";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Importando ícone

export default function Conta() {
  const [open, setOpen] = useState(false);
  const [idDelete, setIdDelete] = useState(0);
  const [formElements, setFormElements] = useState<HTMLFormElement[]>([]); // Para armazenar os formulários dos carros

  // Função para adicionar um novo carro
  function adicionarCarro() {
    const marcaElement = document.getElementById('Marca') as HTMLInputElement;
    const modeloElement = document.getElementById('Modelo') as HTMLInputElement;
    const placaElement = document.getElementById('Placa') as HTMLInputElement;
    const anoElement = document.getElementById('Ano') as HTMLInputElement;
    const erroElement = document.getElementById('erro') as HTMLDivElement;

    // Reseta erros e estilos
    marcaElement.classList.remove('bg-red-100', 'border-red-500');
    modeloElement.classList.remove('bg-red-100', 'border-red-500');
    placaElement.classList.remove('bg-red-100', 'border-red-500');
    anoElement.classList.remove('bg-red-100', 'border-red-500');
    erroElement.textContent = '';

    // Verifica se todos os campos estão preenchidos
    if (marcaElement.value && modeloElement.value && placaElement.value && anoElement.value) {
      const novoFormulario = document.createElement('form');
      novoFormulario.className = 'flex flex-col mb-4 p-4 border rounded-lg bg-gray-50 shadow-md';
      novoFormulario.innerHTML = `
        <label class="mt-2">Marca</label>
        <input type="text" value="${marcaElement.value}" readonly class="p-2 border rounded" />
        <label class="mt-2">Modelo</label>
        <input type="text" value="${modeloElement.value}" readonly class="p-2 border rounded" />
        <label class="mt-2">Placa</label>
        <input type="text" value="${placaElement.value}" readonly class="p-2 border rounded" />
        <label class="mt-2">Ano</label>
        <input type="text" value="${anoElement.value}" readonly class="p-2 border rounded" />
        <button type="button" class="mt-2 bg-red-500 text-white p-2 rounded" data-id="${formElements.length}">Remover</button>
      `;

      // Adiciona o evento de clique para o botão "Remover"
      novoFormulario.querySelector('button')?.addEventListener('click', () => {
        idModal(formElements.length);
      });

      setFormElements((prev) => [...prev, novoFormulario]); // Armazena o novo formulário
      document.getElementById('carro')?.appendChild(novoFormulario);

      // Limpa os campos
      marcaElement.value = '';
      modeloElement.value = '';
      placaElement.value = '';
      anoElement.value = '';
    } else {
      // Exibe mensagem de erro e destaca campos vazios
      erroElement.textContent = 'Todos os campos devem ser preenchidos.';
      if (!marcaElement.value) marcaElement.classList.add('bg-red-100', 'border-red-500');
      if (!modeloElement.value) modeloElement.classList.add('bg-red-100', 'border-red-500');
      if (!placaElement.value) placaElement.classList.add('bg-red-100', 'border-red-500');
      if (!anoElement.value) anoElement.classList.add('bg-red-100', 'border-red-500');
    }
  }

  function sair() {
    localStorage.setItem('Logado', 'False');
    window.location.reload();
    window.location.href = '/';
  }

  const handleDelete = () => {
    const formToRemove = formElements[idDelete];
    formToRemove.remove(); // Remove o formulário correspondente
    setFormElements((prev) => prev.filter((_, index) => index !== idDelete)); // Atualiza o estado
    setOpen(false); // Fecha o modal
  };

  const idModal = (id: number) => {
    setOpen(true);
    setIdDelete(id);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <section className="p-6 bg-white rounded-lg shadow">
        <header className="text-lg font-bold mb-4">Perfil</header>
        <form className="flex flex-col">
          <label>Nome Completo</label>
          <input type="text" placeholder="João Silva" className="p-2 border rounded mb-2" />
          <label>Cep</label>
          <input type="text" placeholder="01234-560" className="p-2 border rounded mb-2" />
          <label>Telefone</label>
          <input type="tel" placeholder="11 99999-9999" className="p-2 border rounded mb-2" />
          <label>Email</label>
          <input type="email" placeholder="teste@email.com" className="p-2 border rounded mb-2" />
          <label>Senha</label>
          <input type="password" placeholder="******" className="p-2 border rounded mb-4" />
          <Link href="/">
            <button type="button" className="bg-blue-500 text-white p-2 rounded w-full" onClick={sair}>
              Sair
            </button>
          </Link>
        </form>
      </section>

      <section className="p-6 bg-white rounded-lg shadow">
        <header className="text-lg font-bold mb-4">Carro</header>
        <form className="flex flex-col">
          <div id="erro" className="text-red-500 mb-2"></div>
          <input type="text" id="Marca" placeholder="Marca" className="p-2 border rounded mb-2" />
          <input type="text" id="Modelo" placeholder="Modelo" className="p-2 border rounded mb-2" />
          <input type="text" id="Placa" placeholder="Placa" className="p-2 border rounded mb-2" />
          <input type="text" id="Ano" placeholder="Ano" className="p-2 border rounded mb-4" />
          <input
            type="button"
            value="Adicionar"
            onClick={adicionarCarro}
            className="bg-blue-500 text-white p-2 rounded cursor-pointer"
          />
        </form>
        <div id="carro" className="m-2"></div>
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
