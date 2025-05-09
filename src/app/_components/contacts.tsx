export default function Contacts() {
  return (
    <section className="w-full h-[1000px] md:h-[550px] lg:h-[800px] 2xl:h-[950px] relative overflow-hidden">
      <div className="container mx-auto px-4 py-2 md:py-12 z-10 absolute left-[50%] top-[80px] md:top-[100px] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="w-full md:w-4/5 m-auto text-[20px] lg:text-4xl font-bold text-center mb-16 text-[var(--text-primary-color-sn)]">
          Mercado superaquecido com oportunidades nacionais e internacionais
        </h2>
      </div>

      <img
        src="/mensagens-web.png"
        alt="Imagem mensagens recrutadores"
        className="hidden md:block w-full h-full object-fill"
      />

      <img
        src="/mensagens-mobile.png"
        alt="Imagem mensagens recrutadores"
        className="md:hidden w-full h-full object-fill"
      />
    </section>
  );
}
