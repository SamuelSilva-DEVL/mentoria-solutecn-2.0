import React from "react";

export default function SearchJob() {
  return (
    <section className="bg-[(var(--tertiary-color-sn))]  py-16" id="vagas">
      <article className="w-4/5 mx-auto px-2 flex flex-col items-center gap-4 text-[var(--text-secondary-color-sn)]">
        <img src="/job-offer.gif" height={200} width={200} alt="Icone de pesquisa de vagas"></img>

        <h2 className="text-4xl font-bold text-center">
          São mais de <strong className="text-[#1E90FF] font-extrabold">500 mil vagas</strong> de emprego disponíveis nessa área!
        </h2>

        <p className="mb-8 text-center">
          O trabalho de Testador de Sites e Aplicativos faz parte da área de tecnologia,
          sendo uma das profissões que mais crescem no mundo! Um estudo da
          Brasscom aponta uma demanda de 797 mil profissionais de tecnologia,
          destacando o enorme potencial dessa carreira.
        </p>

        <a
          href="https://www.glassdoor.com.br/Vaga/analista-de-testes-vagas-SRCH_KO0,18.htm"
          target="_blank"
          className="wpp-button-link w-fit px-5 py-5 flex gap-1.5 text-[12px] uppercase md:text-[16px]"
        >
          VER MAIS
        </a>
      </article>
    </section>
  );
}
