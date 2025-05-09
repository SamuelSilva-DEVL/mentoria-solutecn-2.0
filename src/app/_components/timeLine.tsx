export default function TimeLine() {
  return (
    <section
      className="bg-[(var(--tertiary-color-sn))] relative overflow-hidden text-[var(--text-secondary-color-sn)]"
      id="beneficios-qa"
    >
      <div className="container mx-auto pt-16 pb-16 px-4 relative">
        <article className="w-4/5 flex flex-col lg:flex-row gap-2 m-auto ">
          <div className="w-1/2 space-y-6" data-aos="fade-down">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-10">
              Analista de Sites/Aplicativos Conheça a profissão do futuro!
            </h2>

            <p>
              Você já usou um aplicativo cheio de erros? Tenho certeza que sim!
              Mas já parou para pensar por que isso acontece? Isso ocorre devido
              à falta de testes adequados para garantir que tudo funcione
              perfeitamente.
            </p>
            <p>
              O testador de aplicativos é o profissional responsável por avaliar
              e verificar o desempenho de diversos tipos de aplicativos, como
              sites de e-commerce, jogos de celular ou computador, redes
              sociais, sistemas bancários, e muito mais!
            </p>
            <p>
              Além de "testador de aplicativos", essa função também é conhecida
              por outros termos, como analista de testes, analista de qualidade
              e analista de QA. Embora os nomes variem, o objetivo é o mesmo:
              garantir que tudo funcione como esperado, testando cada detalhe!
            </p>
          </div>

          <div className="w-1/2 space-y-6 flex" data-aos="fade-left">
            <img src="/software.gif" width={600} height={600} alt="Icone engrenagem desenvolvimento software"></img>
          </div>
        </article>
      </div>
    </section>
  );
}
