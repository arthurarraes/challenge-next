import Image from 'next/image';
import arthur from '../../assets/arthur.svg';
import willian from '../../assets/willian.svg';
import iago from '../../assets/iago.svg';
import github from '../../assets/github.svg';
import projeto from '../../assets/sobre-projeto.svg';

export default function SobreNos() {
    const participantes = [
        {
            nome: 'Arthur Arraes',
            github: 'https://github.com/arthurarraes',
            imagem: arthur,
        },
        {
            nome: 'Willian Moreira',
            github: 'https://github.com/WillianMoreiraBFP',
            imagem: willian,
        },
        {
            nome: 'Iago Victor',
            github: 'https://github.com/iagovic',
            imagem: iago,
        },
    ];

    return (
        <main>
            <section className="my-16 mx-5">
                <header className="text-2xl font-bold text-center">Participantes</header>
                <a className="text-lg text-blue-600 block text-center my-4" href="https://github.com/arthurarraes/challenge-react" target="_blank" rel="noopener noreferrer">
                    Repositório
                </a>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mx-5">
                    {participantes.map((e) => (
                        <div className="flex flex-col items-center text-center" key={e.nome}>
                            <Image src={e.imagem} alt={e.nome} width={100} height={100} />
                            <h1 className="text-lg font-medium">{e.nome}</h1>
                            <h1 className="text-lg">1TDSPK</h1>
                            <a className="text-lg text-blue-600" href={e.github} target="_blank" rel="noopener noreferrer">
                                Github <Image src={github} alt="Github" width={16} height={16} className="inline" />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            <section className="my-16 mx-10 text-center">
                <header className="text-2xl font-bold">Sobre o Projeto</header>
                <p className="text-lg font-normal my-4 indent-5">
                    Bem-vindo ao nosso site! Somos um grupo de estudantes universitários apaixonados por tecnologia e inovação, colaborando com a Porto Seguro e a Oxigênio Aceleradora para trazer uma solução revolucionária para os proprietários de veículos.
                </p>
                <p className="text-lg font-normal my-4 indent-5">
                    Nosso objetivo é simplificar a vida dos motoristas, fornecendo uma plataforma intuitiva e inteligente para diagnóstico e orçamento de peças automotivas. Combinando o poder da inteligência artificial com a expertise da Porto Seguro em seguros automotivos e a inovação da Oxigênio Aceleradora, estamos reinventando a maneira como os problemas dos carros são identificados e resolvidos.
                </p>
                <figure className="my-5">
                    <Image className='mx-auto' src={projeto} alt="Sobre o projeto" width={500} height={300} />
                </figure>
            </section>
        </main>
    );
}
