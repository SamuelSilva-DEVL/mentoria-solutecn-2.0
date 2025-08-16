import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqList = [
  {
    id: 1,
    question: "A mentoria e capacitação garante vaga de emprego?",
    answer:
      "Não, porém temos parcerias com empresas de tecnologia que ao precisar de um analista de qualidade de site/aplicativo júnior ou trainee, falarão diretamente com a gente. Assim, o aluno que se destacar obviamente será recomendado.",
  },
  {
    id: 2,
    question: "Se eu faltar uma aula, posso recuperar depois?",
    answer:
      "Se apresentar um documento que comprove sua ausência, como um atestado médico legítimo, a aula poderá ser recuperada. Caso contrário, NÃO.",
  },
  {
    id: 3,
    question:
      "Preciso ser formado na área de Tecnologia para conseguir um emprego como QA?",
    answer:
      "Não, muitos QAs não têm formação na área, porém têm certificações de cursos profissionalizantes, assim como o Formação Profissional QA.",
  },
  {
    id: 4,
    question: "Os projetos que serão testados serão reais?",
    answer:
      "SIM! Os projetos que serão testados durante a mentoria são reais. Por isso, todo o período que você estudar na mentoria, tudo o que testar será visto como tempo de experiência — experiência que faz diferença no currículo.",
  },
  {
    id: 5,
    question: "Como é entregue o conteúdo do curso?",
    answer:
      "De forma online. Ao final de cada aula, o professor envia o conteúdo em mp3 para cada aluno, referente ao conteúdo assistido.",
  },
  {
    id: 6,
    question: "As aulas são presenciais?",
    answer: "NÃO, as aulas são todas online via Google Meet.",
  },
  {
    id: 7,
    question: "Qual o período do curso, e quantas aulas por semana?",
    answer:
      "O curso terá duração de 3 meses, podendo estender-se a 4 meses, sendo duas aulas por semana, às terças e quintas à noite, a partir das 20h. Cada aula terá, em média, duração de uma hora e meia.",
  },
  {
    id: 8,
    question:
      "Se eu não gostar, posso cancelar? Como fazer o cancelamento do curso?",
    answer:
      "Sim, você tem 14 dias corridos a partir do início das aulas para analisar o curso e exercer o direito de cancelamento. Em até 7 dias, conforme o Código de Defesa do Consumidor, é possível cancelar e receber 100% do valor pago, sem dificuldades. Nós damos 15 dias para analisar.",
  },
  {
    id: 9,
    question:
      "Não tenho limite de crédito em um cartão, consigo pagar usando dois cartões?",
    answer:
      "Sim, é possível. Você conseguirá fazer isso direto com a diretoria.",
  },
  {
    id: 10,
    question: "O curso inclui suporte?",
    answer:
      "Sim, oferecemos suporte técnico que será realizado aos sábados à noite, a partir das 19h. Em caso de urgência, o mentor entra em contato com o aluno em dias úteis.",
  },
  {
    id: 11,
    question: "Não sei nada de TI, posso fazer o curso?",
    answer:
      "Deve! Você sairá do curso Formação Profissional QA com todo o conhecimento e experiência necessários para seu primeiro emprego como QA.",
  },
];

export default function Faq() {
  return (
    <section className="text-[var(--primary-color-sn)]" id="faq" data-aos="fade-down">
      <div className="container mx-auto w-4/5 pt-16 pb-16 px-4 flex flex-col gap-6 items-center justify-center">
        <p className="text-4xl font-bold text-center">
          Algumas perguntas frequentes
        </p>

        <Accordion type="single" collapsible className="w-full  mx-auto">
          {faqList.map((faq, _index) => (
            <AccordionItem
              disabled={_index === faqList.length - 1}
              key={faq.id}
              value={`item-${faq.id}`}
              className="w-full border rounded-md shadow-md mb-3 px-3 cursor-pointer accordion-trigger-style"
            >
              <AccordionTrigger className="cursor-pointer text-xl   data-[state=open]:underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
