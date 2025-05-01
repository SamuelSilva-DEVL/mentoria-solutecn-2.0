import { ButtonWppLink } from "./buttonWppLink";

export default function ValueCourse() {
  return (
    <section className="py-16 bg-black text-center">
      <div className="w-1/2 px-4 py-8 m-auto rounded-xl shadow-md flex items-center flex-col gap-3 shadow-md" style={{
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(180deg, #FFF7F714 0%, #1C4070 100%)'
  }}>
        <img
          src="/icone-mentoria.png"
          height={"250px"}
          width={"250px"}
          data-aos="fade-up"
          data-aos-delay="300"
        ></img>

        <h2
          className="text-xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          POR APENAS:
        </h2>

        <p className="text-8xl" data-aos="fade-up" data-aos-delay="500">
          12 x de 97
        </p>

        <p className="text-xl" data-aos="fade-up" data-aos-delay="500">
          ou <span>R$ 997</span> à vista
        </p>

        <ButtonWppLink title="GARANTIR MINHA VAGA" />

        <img
          src="/metodos-pagamento.webp"
          data-aos="fade-up"
          data-aos-delay="500"
        ></img>
      </div>
    </section>
  );
}
