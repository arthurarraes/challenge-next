"use client"
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

export default function DuvidasFrequentes() {
    const duvidasFrequentes = [
        {
            id: 1,
            pergunta: "Como a IA determina quais problemas meu veículo pode estar apresentando?",
            resposta: "A IA utiliza informações fornecidas pelo usuário sobre os sintomas e consequências do problema no veículo, analisando esses dados com um banco de dados de problemas comuns e suas causas. Ela usa algoritmos avançados para comparar os sintomas reportados com padrões de falhas conhecidos, gerando uma estimativa sobre o que pode estar causando o problema."
        },
        {
            id: 2,
            pergunta: "Quão preciso é o custo estimado para peças e serviços fornecido pela IA?",
            resposta: "A precisão da estimativa de custo depende da qualidade e atualização das informações que a IA usa. A IA baseia suas estimativas em dados de mercado atualizados e informações sobre o custo de peças e mão de obra em sua região. No entanto, o custo final pode variar devido a fatores como disponibilidade de peças e políticas de preços das oficinas."
        },
        {
            id: 3,
            pergunta: "A IA pode substituir o diagnóstico feito por um mecânico qualificado?",
            resposta: "A IA é uma ferramenta para auxiliar no diagnóstico, não um substituto completo para a experiência de um mecânico qualificado. Ela pode fornecer uma análise inicial e estimativas úteis, mas recomenda-se que um profissional examine o veículo para uma confirmação final e para realizar reparos complexos."
        },
        {
            id: 4,
            pergunta: "Como a IA lida com problemas que não estão bem documentados ou são menos comuns?",
            resposta: "A IA é projetada para aprender e se adaptar com o tempo. Para problemas menos comuns ou não bem documentados, ela usa dados históricos e feedback contínuo para melhorar suas previsões. Se um problema não for identificado com precisão, o sistema pode solicitar uma avaliação adicional por parte de um mecânico."
        },
        {
            id: 5,
            pergunta: "Quanto tempo leva para a IA fornecer uma estimativa completa para o reparo?",
            resposta: "O tempo necessário para gerar uma estimativa varia de acordo com a complexidade do problema e a quantidade de informações fornecidas. Em geral, a IA pode fornecer uma estimativa inicial em poucos minutos, mas para uma avaliação mais detalhada e precisa, pode ser necessário um pouco mais de tempo, especialmente se o problema for complexo."
        }
    ];

    const [respostasVisiveis, setRespostasVisiveis] = useState(Array(duvidasFrequentes.length).fill(false));

    const aparecerResposta = (index: number) => {
        const novosEstados = [...respostasVisiveis];
        novosEstados[index] = !novosEstados[index];
        setRespostasVisiveis(novosEstados);
    };

    return (
        <section id="ajuda" className="bg-gray-200 p-5 text-center">
            <header className="text-xl font-bold">Dúvidas Frequentes</header>
            {duvidasFrequentes.map((i, index) => (
                <div className="my-2 flex flex-col items-center gap-2 p-2 border-b border-gray-300" key={i.id}>
                    <div className="flex items-center">
                        <h1 className="font-open-sans text-lg font-semibold">{i.pergunta}</h1>
                        <button onClick={() => aparecerResposta(index)} className="ml-2 border-0">
                        <FaChevronDown
                                className={`transition-transform duration-300 ${respostasVisiveis[index] ? 'transform rotate-180' : ''}`}
                            />
                        </button>
                    </div>
                    {respostasVisiveis[index] && (
                        <h1 className="font-medium text-base">{i.resposta}</h1>
                    )}
                </div>
            ))}
        </section>
    );
}
