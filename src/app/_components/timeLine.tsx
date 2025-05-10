import { Icon } from "lucide-react";

const TimeLineList = [
  {
    id: 1,
    title: "Inscrições e pagamento",
    description: "Inicia em 19/09/2024 e vai até o dia 22/10/2024.",
    icon: "/bill.gif",
  },
  {
    id: 2,
    title: "Data de início das aulas",
    description: "22/10/2024 a 21/01/2025.",
    icon: "/calendar.gif",
  },
  {
    id: 3,
    title: "Horário das aulas",
    description:
      "As Terças e Quintas a partir das 19:30hrs. E aos Sábados para suporte aos alunos a partir das 20:00hrs.",
    icon: "/pocket-watch.gif",
  },
  {
    id: 4,
    title: "Local das aulas",
    description: "As aulas acontecerão online via google meet.",
    icon: "/location.gif",
  },
];

export default function TimeLine() {
  return (
    <section className="relative overflow-hidden py-16" id="beneficios-qa">
      <article className="w-4/5 flex flex-col items-center mx-auto">
        <h2 className="text-4xl font-bold mb-12" data-aos="fade-down">
          Cronograma da mentoria
        </h2>

        <ul>
          {TimeLineList.map((item, index) => (
            <li
              key={item.id}
              className="w-4/5 mx-auto flex gap-3 mb-3"
              data-aos="fade-down"
              data-aos-delay={400 + index * 100}
            >
              <img
                src={item.icon}
                alt={item.title}
                height={"100"}
                width={"100"}
              ></img>
              <div>
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
