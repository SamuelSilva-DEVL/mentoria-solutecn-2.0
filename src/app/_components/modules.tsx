"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const modulesList = [
  {
    id: 1,
    title: "O que é o Analista de Qualidade de Software/QA",
    description: "Entenda o papel do Analista de QA no ciclo de desenvolvimento de software.",
    duration: "30 min",
  },
  {
    id: 2,
    title: "Metodologias tradicionais e ágeis",
    description: "Conheça as principais metodologias e como elas impactam o trabalho de QA.",
    duration: "45 min",
  },
  {
    id: 3,
    title: "Scrum",
    description: "Aprenda sobre o framework Scrum e a participação do QA em times ágeis.",
    duration: "40 min",
  },
  {
    id: 4,
    title: "Conceitos Básicos de Teste de Software",
    description: "Explore os conceitos fundamentais de testes e sua importância para a qualidade.",
    duration: "35 min",
  },
  {
    id: 5,
    title: "Testes funcionais e não funcionais",
    description: "Diferencie testes funcionais dos não funcionais e seus objetivos.",
    duration: "30 min",
  },
  {
    id: 6,
    title: "Níveis de teste",
    description: "Compreenda os diferentes níveis de testes: unitário, integração, sistema e aceitação.",
    duration: "30 min",
  },
  {
    id: 7,
    title: "Documentação de testes",
    description: "Saiba como criar casos de teste, roteiros e relatórios eficazes.",
    duration: "40 min",
  },
  {
    id: 8,
    title: "Técnicas e tipos de Testes",
    description: "Estude técnicas como particionamento de equivalência, valores limite, e outros tipos de testes.",
    duration: "45 min",
  },
  {
    id: 9,
    title: "Execução de Testes e Gestão de Defeitos",
    description: "Veja como executar testes e reportar defeitos de maneira clara e objetiva.",
    duration: "40 min",
  },
  {
    id: 10,
    title: "Testes manuais na prática",
    description: "Exercite o processo de teste manual em aplicações reais.",
    duration: "50 min",
  },
  {
    id: 11,
    title: "Gestão de defeitos",
    description: "Entenda o fluxo de defeitos: da identificação à resolução.",
    duration: "35 min",
  },
  {
    id: 12,
    title: "Testes de API",
    description: "Aprenda a testar APIs utilizando ferramentas como Postman.",
    duration: "50 min",
  },
  {
    id: 13,
    title: "Automação de testes - Cypress",
    description: "Introdução prática à automação de testes com o Cypress.",
    duration: "1h",
  },
  {
    id: 14,
    title: "Como criar um perfil no LinkedIn para desenvolvedores",
    description: "Dicas práticas para montar um perfil no LinkedIn focado na área de tecnologia.",
    duration: "30 min",
  },
  {
    id: 15,
    title: "Simulado de entrevistas",
    description: "Participe de um simulado de entrevista para se preparar para o mercado de trabalho.",
    duration: "1h",
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
    <section className="bg-black py-16">
      <div className="w-full mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-[var(--text-primary-color)] text-center">Módulos da mentoria</h2>

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
                  className="basis-full shrink-0 grow-0 md:basis-1/3 pe-3"
                  style={{}}
                >
                  <article className="relative overflow-hidden bg-cover bg-center rounded-2xl h-60 flex flex-col bg-[url('/teclado-mouse.webp')] border-white border-b-3">
                    {/* Overlay semi-transparente */}
                    <div
                      className="absolute inset-0 bg-[var(--primary-color)]"
                      style={{ opacity: 0.8 }}
                    />

                    {/* Conteúdo por cima */}
                    <div className="relative z-10 p-6 flex flex-col space-y-4 h-full text-white">
                      <div className="flex-1 flex items-start justify-between">
                        <div className="flex gap-3">
                          <div>
                            <h3 className="font-bold text-2xl my-1">
                              {item.title}
                            </h3>
                            <p className="text-lg select-none font-medium">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-400 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <span>{item.duration}</span>
                        </div>

                        <a
                          target="_blank"
                          href={`https://wa.me/556799998800?text=Olá, vim pelo site e gostaria de mais informações sobre ${item.title}`}
                          className="flex items-center justify-center gap-2 hover:bg-[var(--tertiary-color)] hover:text-black px-4 py-1 rounded-md duration-300"
                        >
                          <FaWhatsapp size={20} />
                          Quero me inscrever
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
