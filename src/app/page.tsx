import Image from 'next/image'
import banner from '../assets/banner.svg'
import ProblemasComuns from '@/components/ProblemasComuns';
import DuvidasFrequentes from '@/components/DuvidasFrequentes';
export default function Home() {
  return (
      <main >
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 p-5 bg-gray-200 items-center justify-around">
          <section className="p-3 flex flex-col items-center">
            <header>Descubra em poucos passos, o problema do seu carro.</header>
            <p className='font-open-sans text-lg my-2 text-center'>Com a nova IA você descobrirá em qualquer lugar, o defeito do seu veículo.</p>
            <button className="px-2 md:px-4 py-2 md:py-3 bg-blue-500 text-white font-sora md:text-lg my-2 border-0 rounded-md m-1" >Consulte Agora</button>
          </section>
          <figure className='text-center'>
            <Image
              src={banner}
              alt="Logo" className='mx-auto w-4/6 md:w-5/6'/>
          </figure>
        </section>

        <ProblemasComuns/>
        <DuvidasFrequentes/>
      </main>
  );
}
