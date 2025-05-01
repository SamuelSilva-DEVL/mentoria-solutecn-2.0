import React from "react";
import Icone from "../../../public/icone-mentoria.png";
import { ButtonWppLink } from "./buttonWppLink";

const guarantees = [
  {
    id: 1,
    title: "Mentoria com o instrutor",
    description:
      "Tenha acesso direto ao instrutor para tirar dúvidas, receber orientações personalizadas e acelerar seu aprendizado com quem entende do assunto.",
    icon: "/icons/mentoria.svg",
  },
  {
    id: 2,
    title: "Acesso vitalício ao conteúdo",
    description:
      "Estude no seu ritmo! O curso fica disponível para você por tempo ilimitado, permitindo revisar e retomar sempre que quiser.",
    icon: "/icons/lifetime-access.svg",
  },
  {
    id: 3,
    title: "Certificado reconhecido",
    description:
      "Ao concluir o treinamento, você receberá um certificado que comprova sua participação e conhecimento adquirido, valorizando ainda mais seu currículo.",
    icon: "/icons/certificate.svg",
  },
  {
    id: 4,
    title: "Garantia incondicional de 14 dias",
    description:
      "Teste o curso por até 14 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas ou burocracias.",
    icon: "/icons/guarantee.svg",
  },
  {
    id: 5,
    title: "Suporte ágil e dedicado",
    description:
      "Conte com uma equipe pronta para te ajudar em qualquer dificuldade técnica ou dúvida sobre o curso, garantindo uma experiência de aprendizado tranquila.",
    icon: "/icons/support.svg",
  },
  {
    id: 6,
    title: "Atualizações contínuas do curso",
    description:
      "Receba todas as atualizações e novos conteúdos sem custo adicional, mantendo-se sempre atualizado com as melhores práticas do mercado.",
    icon: "/icons/update.svg",
  },
];

export default function CourseGuarantee() {
  return (
    <section className="bg-black">
      <div className="container mx-auto pt-16 pb-16 px-4 flex flex-col gap-6 items-center justify-center">
        <div className="w-4/5 m-auto">
          <h2 className="text-5xl mx-auto font-bold text-center w-4/6 text-[var(--text-primary-color)]">
            Ao se inscrever nele agora você terá uma mentoria com:
          </h2>

          <div className="flex flex-wrap gap-3 mt-3">
            {guarantees.map((guarantee) => (
              <div
                key={guarantee.id}
                className="w-[32.63%] border-2 border-[var(--text-secondary-color)] rounded-lg p-1.5 flex flex-col items-center justify-center"
              >
                <img
                  src="/icone-mentoria.png"
                  alt="icone-mentoria"
                  height={"200"}
                  width={"200"}
                ></img>
                <h3 className="text-[var(--text-secondary-color)] text-center">
                  {guarantee.title}
                </h3>
                <p className="text-[var(--text-primary-color)] text-center">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-4/5 m-auto flex items-center gap-3 rounded-lg bg-white"
          style={{
            boxShadow: "0px 9px 13px 0px rgba(0, 0, 0, 0.19)",
          }}
        >
          <img
            src="/icone-mentoria.png"
            alt="icone-mentoria"
            height={"200"}
            width={"200"}
          ></img>

          <div className="space-y-3">
            <h3 className="text-[var(--text-secondary-color)] text-[22px]">
              Garantia Estendida de 14 Dias – Mais Tempo, Mais Segurança!
            </h3>
            <p className="text-[16px]">
              Oferecemos uma garantia estendida de 14 dias, o dobro do que a lei
              exige, para que você teste o treinamento com total liberdade. Se
              dentro desse prazo você sentir que o curso não é para você, é só
              nos enviar um e-mail e devolveremos 100% do seu dinheiro, sem
              perguntas, complicações ou burocracia. Simples assim – sua
              satisfação está garantida!
            </p>
          </div>
        </div>

        <ButtonWppLink title="Quero garantir minha vaga" />
      </div>
    </section>
  );
}
