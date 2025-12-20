import { ButtonWppLink } from "./buttonWppLink";

export default function ValueCourse() {
  return (
    <section className="py-16 bg-[var(--primary-color-sn)] text-center text-[var(--tertiary-color-sn)]" id="valores">
      <div
        className="w-[80%] md:w-1/2 px-4 py-8 m-auto rounded-xl flex items-center flex-col gap-4 shadow-md"
        style={{
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(180deg, var(--primary-color-sn) 0%, var(--secondary-color-sn) 100%)",
        }}
      >
        <img
          src="nova-logo.png" 
          alt="Formação profissional de QA. Seu futuro na ti, começa aqui."
          height={"200px"}
          width={"200px"}
          data-aos="fade-up"
          data-aos-delay="300"
        ></img>

        <h2
          className="text-xl font-bold"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          POR APENAS:
        </h2>

        <p className="text-[28px] md:text-8xl font-extrabold" data-aos="fade-up" data-aos-delay="500">
          <strong>10 x R$ 170,05</strong>
        </p>

        <p className="text-[20px] md:text-[28px]" data-aos="fade-up" data-aos-delay="500">
          ou <strong>R$ 500</strong> ao efetuar a matricula mais 2x de <strong>R$ 550</strong>
        </p>

        <p className="text-[22px] md:text-[24px]" data-aos="fade-up" data-aos-delay="500">
          ou <strong>R$ 1500</strong> à vista
        </p>

        <ButtonWppLink title="QUERO ME INSCREVER" />

        <img
          src="/metodos-pagamento.webp"
          data-aos="fade-up"
          data-aos-delay="500"
        ></img>
      </div>
    </section>
  );
}
