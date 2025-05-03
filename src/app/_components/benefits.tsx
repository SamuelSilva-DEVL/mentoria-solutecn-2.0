import { FaCheckCircle } from "react-icons/fa";

const benefitsList = [
  {
    id: 1,
    title: "Início rápido",
    description:
      "Mesmo começando do zero, sem conhecimento em programação ou diploma universitário, é possível ingressar na área de tecnologia.",
  },
  {
    id: 2,
    title: "Salário inicial atrativo",
    description:
      "Você pode ter um emprego formal com salários entre 3 mil e 12 mil por mês, ou atuar como PJ, dobrando seus ganhos e ainda realizando trabalhos como freelancer.",
  },
  {
    id: 3,
    title: "Trabalho à distância",
    description:
      "Alcance sua independência financeira e tenha a liberdade de adquirir o que sempre quis, viajar para destinos dos seus sonhos e viver novas experiências.",
  },
  {
    id: 4,
    title: "Melhor qualidade de vida",
    description:
      "Trabalhando remotamente, você pode melhorar sua qualidade de vida, trabalhando de qualquer lugar, inclusive de casa, sem perder horas no trânsito diário.",
  },
  {
    id: 5,
    title: "Carreira internacional",
    description:
      "Essa é uma carreira global, permitindo que você concorra a vagas com salários em dólar ou euro, e até mesmo se mude legalmente para outro país por meio do seu trabalho.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[(var(--tertiary-color-sn))] relative overflow-hidden text-[var(--text-secondary-color-sn)]" id="beneficios-qa">
      <div className="container mx-auto pt-16 pb-16 px-4 relative">
        <article className="w-4/5 flex flex-col lg:flex-row gap-4 m-auto ">
          <div className="space-y-6">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-10"
              data-aos="fade-down"
            >
              Os 5 principais benefícios de trabalhar na área de QA
            </h2>
            <p className="lg:text-lg" data-aos="fade-right">
              Nossa empresa se destaca por oferecer soluções personalizadas e
              inovadoras, adaptáveis às necessidades dos nossos clientes.
            </p>
            <img
              src="/imagem-beneficios.png"
              alt="imagem-beneficios"
              height={400}
              width={"80%"}
              className="m-auto"
              data-aos="fade-down"
              loading="lazy"
            ></img>
          </div>

          <div
            className="space-y-6 flex flex-col justify-center items-center"
            data-aos="fade-left"
          >
            <ul className="list-disc list-inside space-y-2 list-none flex flex-col gap-2.5">
              {benefitsList.map((benefit, index) => (
                <li key={benefit.id} className="flex gap-2.5 items-start" data-aos="fade-down" data-aos-delay={index * 120}>
                  <FaCheckCircle className="text-6xl text-[var(--primary-color-sn)]" />
                  <div>
                    <h4 className="text-2xl font-semibold">{benefit.title}</h4>
                    <p className="text-xl">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
