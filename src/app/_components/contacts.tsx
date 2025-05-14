"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const messagesRecruiters = [
  {
    id: 1,
    linkImage: "/Ammanda.png",
  },
  {
    id: 2,
    linkImage: "/Inter1.png",
  },
  {
    id: 3,
    linkImage: "/Inter2.png",
  },
  {
    id: 4,
    linkImage: "/Inter3.png",
  },
  {
    id: 5,
    linkImage: "/Inter4.png",
  },
  {
    id: 6,
    linkImage: "/Inter5.png",
  },
  {
    id: 7,
    linkImage: "/Ju.png",
  },
  {
    id: 8,
    linkImage: "/Raquel.png",
  },
  {
    id: 9,
    linkImage: "/Rose.png",
  },
  {
    id: 10,
    linkImage: "/Ela.png",
  },
  {
    id: 11,
    linkImage: "/Thamara.png",
  },
]

export default function Contacts() {
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
    <section className="w-full h-full md:h-[550px] lg:h-[800px] 2xl:h-[950px] relative overflow-hidden bg-[#0f0f0f] md:bg-[#050D22] text-[var(--text-primary-color-sn)] py-4">
      <div className="hidden md:block container mx-auto px-4 py-2 md:py-12 z-10 absolute left-[50%] top-[80px] md:top-[100px] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="w-full md:w-4/5 m-auto text-[16px] lg:text-4xl font-bold text-center mb-16">
          Mercado superaquecido com oportunidades nacionais e internacionais
        </h2>
      </div>

      <img
        src="/eee.png"
        alt="Imagem mensagens recrutadores"
        className="hidden md:block w-full h-full object-fill"
      />

      <h2 className="w-4/5 mx-auto text-center text-2xl md:hidden mb-4">Mercado superaquecido com oportunidades nacionais e internacionais</h2>

      <div className="relative md:hidden">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div
              className="flex items-center h-[450px]"
              style={{
                backfaceVisibility: "hidden",
                touchAction: "pan-y",
                marginLeft: "-10px",
              }}
            >
              {messagesRecruiters.map((item) => (
                <div
                  key={item.id}
                  // className="basis-full md:basis-1/2 lg:basis-1/3 shrink-0 grow-0  pe-3"
                  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 shrink-0 grow-0 pe-3 max-h-[450px]"
                  style={{}}
                >
                  <img
                    src={item.linkImage}
                    alt="Imagem mensagens recrutadores"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
