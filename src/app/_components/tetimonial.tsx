"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import tutor1 from '../../../public/imagem-perfil1.png'
import tutor2 from '../../../public/imagem-perfil2.png'
import Image from 'next/image'

const testimonials = [
  {
    content:
      "Curso top.",
    author: "Isaque bambaz",
    role: "Estudante ADS",
    image: tutor2,
  },
  {
    content:
      "Curso top.",
    author: "Isaque bambaz",
    role: "Estudante ADS",
    image: tutor1,
  },
  {
    content: "Curso top.",
    author: "Isaque bambaz",
    role: "Estudante ADS",
    image: tutor2,
  },
]

export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  })


  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[var(--secondary-color-sn)] py-16 text-[var(--text-primary-color-sn)]" id="depoimentos">
      <div className="container mx-auto px-4" data-aos="fade-down">

        <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos nossos alunos</h2>

        <div className="relative max-w-4xl mx-auto">

          <div className='overflow-hidden' ref={emblaRef} >
            <div className='flex'>
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[var(--primary-color-sn)] rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='relative w-24 h-24'>
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes='96px'
                          className='object-cover rounded-full'
                        />
                      </div>

                      <p className='text-gray-200'>{item.content}</p>

                      <div>
                        <p className='font-bold'>{item.author}</p>
                        <p className='text-sm text-gray-400'>{item.role}</p>
                      </div>

                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer'
            onClick={scrollPrev}
          >
            <FaChevronLeft className='w-6 h-6 text-gray-600' />
          </button>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer'
            onClick={scrollNext}
          >
            <FaChevronRight className='w-6 h-6 text-gray-600' />
          </button>

        </div>

      </div>
    </section>
  )
}