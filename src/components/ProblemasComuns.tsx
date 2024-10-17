export default function ProblemasComuns() {
    const problemas = [
        { id: 1, problema: "Alinhamento", link: "https://blog.portoseguro.com.br/alinhamento-e-balanceamento-evite-dores-de-cabeca-com-a-manutencao" },
        { id: 2, problema: "Ar-Condicionado", link: "https://blog.portoseguro.com.br/4-cuidados-importantes-com-o-ar-condicionado-do-seu-carro" },
        { id: 3, problema: "Arrefecimento", link: "https://blog.portoseguro.com.br/cuidados-com-o-carro-que-voce-deve-ter-todo-mes" },
        { id: 4, problema: "Balanceamento e Geometria", link: "https://blog.portoseguro.com.br/alinhamento-e-balanceamento-evite-dores-de-cabeca-com-a-manutencao" },
        { id: 5, problema: "Correias", link: "https://blog.portoseguro.com.br/cuidados-com-o-carro-que-voce-deve-ter-todo-mes" },
        { id: 6, problema: "Discos e Pastilhas de Freio", link: "https://mobilidade.estadao.com.br/entender/oito-sintomas-de-que-a-embreagem-esta-com-problemas/" },
        { id: 7, problema: "Embreagens", link: "https://mobilidade.estadao.com.br/entender/oito-sintomas-de-que-a-embreagem-esta-com-problemas/" },
        { id: 8, problema: "Filtros e Velas de Ignição", link: "https://blog.portoseguro.com.br/carro-falhando-entenda-5-dos-principais-motivos" }
    ];

    return (
        <section className="my-12 mx-4">
            <header className="font-bold text-center text-2xl">Problemas Comuns</header>

            <div className="my-5 mx-7 grid grid-cols-2 gap-10 items-center justify-center">
                {problemas.map((e) => (
                    <div key={e.id} className="rounded-lg flex flex-col items-center justify-center text-center p-5 shadow-lg">
                        <h1 className="font-open-sans text-lg font-semibold">{e.problema}</h1>
                        <button className="px-2 py-1 bg-white border-blue-500 border rounded-lg my-2">
                            <a href={e.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-sora text-base">
                                Saiba Mais
                            </a>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
