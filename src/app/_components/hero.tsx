import { ButtonWppLink } from "./buttonWppLink";
import ImageProfile from "../../../public/imagem-perfil2.png"
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[url('/fundo-texturizado.jpg')] relative overflow-hidden">
      <div className="container mx-auto pt-16 pb-16 px-4 relative">
        <article className="container w-4/5 flex flex-col lg:flex-row items-center justify-between gap-4 m-auto">
          <div className="space-y-6 w-full lg:w-1/2">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-10 text-[var(--text-primary-color)]"
              data-aos="fade-down"
            >
              Descubra como{" "}
              <span className="text-[#00FFFF]">GANHAR DINHEIRO</span> testando
              aplicativos e <span className="text-[#00FFFF]">TRANSFORME</span>{" "}
              sua <span className="text-[#00FFFF]">CARREIRA</span> com uma
              oportunidade <span className="text-[#00FFFF]">INCRÍVEL!</span>
            </h1>
            <div className="relative w-full rounded-md">
              <iframe
                height="300"
                src="https://www.youtube.com/embed/XHOmBV4js_E?si=RCpIgydP-RblNR2u"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-xl w-full"
              ></iframe>
            </div>
            <p className=" lg:text-lg" data-aos="fade-right">
              Você pode trabalhar no conforto da sua casa, seja em um emprego
              fixo ou nas horas vagas, ganhando dinheiro ao testar aplicativos
              de lojas, bancos e até jogos online.
            </p>

            <ButtonWppLink title="Quero ser QA e ganhar dinheiro" />
          </div>

          <div className="w-1/2 h-full z-10" style={{border: "2p solid red"}} data-aos="fade-left">
            <Image
              src={ImageProfile}
              alt='Foto de perfil'
              // sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              width={500}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
