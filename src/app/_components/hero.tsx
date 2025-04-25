import { ButtonWppLink } from "./buttonWppLink";

export function Hero() {
  return (
    <section className="bg-[url('/fundo-texturizado.jpg')] text-white relative overflow-hidden">
      <div className="container mx-auto pt-16 pb-16 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10 text-slate-100"
              data-aos="fade-down"
            >
              Descubra como{" "}
              <span className="text-[#00FFFF]">GANHAR DINHEIRO</span> testando
              aplicativos e <span className="text-[#00FFFF]">TRANSFORME</span>{" "}
              sua <span className="text-[#00FFFF]">CARREIRA</span> com uma
              oportunidade <span className="text-[#00FFFF]">INCRÍVEL!</span>
            </h1>
            <div className="relative w-full">
              <iframe
                width="360"
                height="215"
                src="https://www.youtube.com/embed/YLslsZuEaNE?si=ds960SNxvmJLclAH"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <p className=" lg:text-lg" data-aos="fade-right">
              Você pode trabalhar no conforto da sua casa, seja em um emprego
              fixo ou nas horas vagas, ganhando dinheiro ao testar aplicativos
              de lojas, bancos e até jogos online.
            </p>

            <ButtonWppLink title="Quero ser QA e ganhar dinheiro" />
          </div>

          {/* <div className="hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt='Foto do dog'
              className='object-contain'
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div> */}
        </article>
      </div>
    </section>
  );
}
