"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";
import { ButtonWppLink } from "./buttonWppLink";

const modulesList = [
  {
    id: 1,
    title: "O que é o Analista de Qualidade de Software/QA",
    description:
      "Entenda o papel do Analista de testes no ciclo de desenvolvimento de software.",
  },
  {
    id: 2,
    title: "Metodologias tradicionais e ágeis",
    description:
      "Conheça as principais metodologias e como elas impactam o trabalho de QA.",
  },
  {
    id: 3,
    title: "Scrum",
    description:
      "Aprenda sobre o framework Scrum e a participação do QA em times ágeis.",
  },
  {
    id: 4,
    title: "Conceitos Básicos de Teste de Software",
    description:
      "Explore os conceitos fundamentais de testes e sua importância para a qualidade.",
  },
  {
    id: 5,
    title: "Testes funcionais e não funcionais",
    description:
      "Diferencie testes funcionais dos não funcionais e seus objetivos.",
  },
  {
    id: 6,
    title: "Níveis de teste",
    description:
      "Compreenda os diferentes níveis de testes: unitário, integração, sistema e aceitação.",
  },
  {
    id: 7,
    title: "Documentação de testes",
    description:
      "Saiba como criar casos de teste, roteiros e relatórios eficazes.",
  },
  {
    id: 8,
    title: "Técnicas e tipos de Testes",
    description:
      "Aprenda diferentes formas e categorias de avaliar um software para garantir sua qualidade e correto funcionamento.",
  },
  {
    id: 9,
    title: "Execução de Testes e Gestão de Defeitos",
    description:
      "Veja como executar testes e reportar defeitos de maneira clara e objetiva.",
  },
  {
    id: 10,
    title: "Testes manuais na prática",
    description: "Exercite o processo de teste manual em aplicações reais.",
  },
  {
    id: 11,
    title: "Gestão de defeitos",
    description: "Entenda o fluxo de defeitos: da identificação à resolução.",
  },
  {
    id: 12,
    title: "Testes de API",
    description: "Aprenda a testar APIs utilizando ferramentas como Postman.",
  },
  {
    id: 13,
    title: "Automação de testes - Cypress",
    description: "Introdução prática à automação de testes com o Cypress.",
  },
  {
    id: 14,
    title: "Perfil no LinkedIn para profissionais de TI",
    description:
      "Dicas práticas para montar um perfil no LinkedIn focado na área de tecnologia.",
  },
  {
    id: 15,
    title: "Simulado de entrevistas",
    description:
      "Participe de um simulado de entrevista para se preparar para o mercado de trabalho.",
  },
];

export function Modules() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      speed: 1,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <section className="bg-[var(--secondary-color-sn)] py-16" id="modulos">
      <div className="w-full mx-auto px-4 ">
        <h2 className="text-4xl font-bold mb-12 text-[var(--text-primary-color-sn)] text-center">
          Módulos da mentoria
        </h2>

        <div className="relative">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div
              className="flex"
              style={{
                backfaceVisibility: "hidden",
                touchAction: "pan-y",
                marginLeft: "-10px",
              }}
            >
              {modulesList.map((item) => (
                <div
                  key={item.id}
                  // className="basis-full md:basis-1/2 lg:basis-1/3 shrink-0 grow-0  pe-3"
                  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 shrink-0 grow-0 pe-3"
                  style={{}}
                >
                  <article className="relative overflow-hidden bg-cover bg-center rounded-2xl h-60 flex flex-col items-center justify-center border-white border-b-3 text-[var(--text-primary-color-sn)]">
                    {/* Overlay semi-transparente */}
                    <div
                      className="absolute inset-0 bg-[var(--primary-color-sn)]"
                      style={{ opacity: 0.8 }}
                    />

                    {/* Conteúdo por cima */}
                    <div className="relative z-10 p-6 flex flex-col items-center justify-center space-y-4 h-full">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center gap-3">
                          <div className="text-center flex flex-col items-center justify-center">
                            <h3 className="font-bold text-2xl my-1 text-[var(--tertiary-color)]">
                              {item.title}
                            </h3>
                            <p className="text-lg select-none font-medium">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full mt-12 flex justify-center">
          <ButtonWppLink title="QUERO ME INSCREVER" />
        </div>
      </div>
    </section>
  );
}
