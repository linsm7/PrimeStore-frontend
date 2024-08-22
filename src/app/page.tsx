import Link from 'next/link';

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="md:px-24 px-5">
      <div className="flex flex-col lg:flex-row gap-24 p-8 md:p-12 lg:p-20 items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <h1 className="text-4xl lg:text-6xl">
            Seu Novo Dispositivo Está Aqui na <span className="font-bold">PrimeStore!</span>
          </h1>
          <p className="text-lg lg:text-xl">
            Procure e encontre os eletrônicos mais desejados do momento, com uma experiência de compra fácil e segura. 
            Com produtos que atendem a todas as suas expectativas, a PrimeStore é o destino certo para suas compras tecnológicas.
          </p>
          <Link href="/products">
            <Button className="w-full lg:w-3/4 bg-psColor-400 hover:bg-psColor-300 rounded p-8 text-sm md:text-base">
              Conheça nossos produtos
            </Button>
          </Link>
        </div>
        <div className="w-full md:w-auto">
          <img src="/assets/Nave.svg" alt="Imagem de uma nave no espaço" />
        </div>
      </div>
    </div>
  );
}
