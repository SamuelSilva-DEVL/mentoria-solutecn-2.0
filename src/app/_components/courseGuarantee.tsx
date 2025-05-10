import React from "react";
import { ButtonWppLink } from "./buttonWppLink";

const guarantees = [
  {
    id: 1,
    title: "Mentoria com o instrutor",
    description:
      "Tenha acesso direto ao instrutor para tirar dúvidas, receber orientações personalizadas e acelerar seu aprendizado com quem entende do assunto.",
    icon: "/helpdesk.gif",
    alt: "chat",
  },
  {
    id: 2,
    title: "Acesso vitalício ao conteúdo",
    description:
      "Estude no seu ritmo! O curso fica disponível para você por tempo ilimitado, permitindo revisar e retomar sempre que quiser.",
    icon: "/book.gif",
    alt: "livro",
  },
  {
    id: 3,
    title: "Certificado reconhecido",
    description:
      "Ao concluir o treinamento, você receberá um certificado que comprova sua participação e conhecimento adquirido, valorizando ainda mais seu currículo.",
    icon: "/certificate.gif",
    alt: "certificado",
  },
  {
    id: 4,
    title: "Metodologia prática",
    description:
      "Focado em aplicações práticas, o curso oferece exercícios, e durante a aula, o aluno fará testes em sites de verdade para consolidar seu aprendizado.",
    icon: "/rocket-launch.gif",
    alt: "escudo",
  },
  {
    id: 5,
    title: "Horas que valem experiência",
    description:
      "As horas que você passar nesse curso, te servirão como tempo de experiência, para uma possíve vaga de emprego ou para trabalhar como freelancer.",
    icon: "/hourglass.gif",
    alt: "atendimento",
  },
  {
    id: 6,
    title: "Atualizações contínuas do curso",
    description:
      "Receba todas as atualizações e novos conteúdos sem custo adicional, mantendo-se sempre atualizado com as melhores práticas do mercado.",
    icon: "/event-management.gif",
    alt: "engrenagem",
  },
];

export default function CourseGuarantee() {
  return (
    <section className="bg-[var(--tertirary-color-sn)] text-[var(--primary-color-sn)]" id="beneficios">
      <div className="container mx-auto pt-16 pb-16 px-4 flex flex-col gap-6 items-center justify-center">
        <div className="w-4/5 m-auto">
          <h2 className="w-full md:w-4/6 text-4xl md:text-5xl mx-auto font-bold text-center mb-3">
            Ao se inscrever agora, você terá uma mentoria com:
          </h2>

          <ul className="flex flex-wrap justify-center gap-3 mt-3">
            {guarantees.map((guarantee, index) => (
              <li
                key={guarantee.id}
                className="w-full md:w-[48%] lg:w-[32%] xxl:w-[33.63%] border-2 border-[var(--primary-color-sn)] rounded-lg p-1.5 flex flex-col items-center justify-center px-6 py-12"
                data-aos="fade-down" data-aos-delay={400 + index * 100}
              >
                <img
                  src={guarantee.icon}
                  alt={guarantee.alt}
                  height={"100"}
                  width={"100"}
                ></img>
                <h3 className="text-xl font-bold text-[var(--secondary-color-sn)] text-center">
                  {guarantee.title}
                </h3>
                <p className=" text-center">
                  {guarantee.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="w-4/5 m-auto flex flex-col md:flex-row items-center gap-3 rounded-lg bg-[var(--primary-color-sn)] p-6 text-[var(--text-primary-color-sn)] mb-3"
          style={{
            boxShadow: "0px 9px 13px 0px rgba(0, 0, 0, 0.19)",
          }}
          data-aos="fade-down" data-aos-delay={450}
        >
          <img
            src="/nova-logo.png"
            alt="Formação profissional qa. Seu futuro na ti, começa aqui."
            height={"200"}
            width={"200"}
          ></img>

          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-bold text-[22px]">
              Garantia Estendida de 14 Dias – Mais Tempo, Mais Segurança!
            </h3>
            <p className="text-[16px]">
              Oferecemos uma garantia estendida de 14 dias, o dobro do que a lei
              exige, para que você teste o treinamento com total liberdade. Se
              dentro desse prazo você sentir que o curso não é para você, é só
              nos enviar um e-mail e devolveremos 100% do seu dinheiro, sem
              perguntas, complicações ou burocracia. Simples assim, sua
              satisfação está garantida!
            </p>
          </div>
        </div>

        <ButtonWppLink title="QUERO ME INSCREVER AGORA" />
      </div>
    </section>
  );
}
