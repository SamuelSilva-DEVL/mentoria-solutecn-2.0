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
    question: "Pergunta",
    answer: "Resposta",
  },
  {
    id: 2,
    question: "Pergunta",
    answer: "Resposta",
  },
  {
    id: 3,
    question: "Pergunta",
    answer: "Resposta",
  },
  {
    id: 4,
    question: "Pergunta",
    answer: "Resposta",
  },
];

export default function Faq() {
  return (
    <section className="bg-gray-100 text-black">
      <div className="container mx-auto w-4/5 pt-16 pb-16 px-4 flex flex-col gap-6 items-center justify-center">
        <h2 className="text-5xl font-bold">FAQ</h2>

        <p className="text-2xl">Algumas perguntas frequentes</p>

        <Accordion type="single" collapsible className="w-full  mx-auto">
          {faqList.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="w-full border rounded-md shadow-md mb-2 px-3 cursor-pointer"
            >
              <AccordionTrigger className="cursor-pointer text-xl   data-[state=open]:text-[var(--primary-color)]">
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
