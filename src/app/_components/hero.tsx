import { ButtonWppLink } from "./buttonWppLink"
import ImageProfile from "../../../public/image_hero.png"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

export function Hero() {
  return (
    <section
      className="bg-[#0F0F0F] bg-[url('/bg_hero.jpg')] bg-no-repeat bg-top-right bg-size-[contain] relative overflow-hidden"
      id="home"
    >
      <div className="container mx-auto pt-16 pb-5 px-4 relative">
        <article className="container w-4/5 flex flex-col lg:flex-row items-center justify-around gap-4 m-auto">
          <div className="space-y-6 w-full lg:w-1/2 flex flex-col justify-center items-center">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-10 text-[var(--text-primary-color)] text-center"
              data-aos="fade-down"
            >
              Descubra como{" "}
              <span className="text-[#00FFFF]">GANHAR DINHEIRO</span> testando
              sites e aplicativos, e{" "}
              <span className="text-[#00FFFF]">TRANSFORME</span> sua CARREIRAcom
              uma oportunidade INCRÍVEL!
            </h1>

            <img
              src="nova-logo.png"
              alt="Formação profissional de QA. Seu futuro na ti, começa aqui."
              height={"300"}
              width={"300"}
            ></img>

            <p
              className=" lg:text-lg text-[var(--text-primary-color)] text-center"
              data-aos="fade-right"
            >
              Você pode trabalhar no conforto da sua casa, seja em um emprego
              fixo ou nas horas vagas, ganhando dinheiro ao testar aplicativos
              de lojas, bancos e até jogos online.
            </p>

            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target="_blank"
              href={`https://wa.me/5588994822506?text=Olá vim pelo site e gostaria de mais informações sobre a solutecn`}
              // className={`bg-[${color}] text-[${textColor}] px-5 py-3 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:opacity-50`}
              className="wpp-button-link-without-shadow w-fit px-5 py-5 flex gap-1.5 text-[12px] uppercase md:text-[16px]"
            >
              <FaWhatsapp size={20} />
              QUERO SER QAa
            </a>
          </div>

          <div
            className="h-full z-10 flex justify-end mt-3 md:mt-0"
            data-aos="fade-left"
          >
            <Image
              src={ImageProfile}
              alt="Imagem mentor Isaque, braços cruzados e camisa social."
              priority
              className="w-full md:w-[400px]"
            />
          </div>
        </article>
      </div>
    </section>
  )
}
