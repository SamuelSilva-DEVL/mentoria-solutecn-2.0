import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

export default function PolicyPrivate() {
  return (
    <section className="bg-[url('/locked2.jpg')] bg-no-repeat bg-center bg-cover text-[var(--text-primary-color-sn)]" id="politica-de-privacidade">
         <div className="container mx-auto w-4/5 pt-16 pb-16 px-4 flex flex-col gap-6 items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-5">
          Política de privacidade
        </h2>

        <Accordion type="single" collapsible className="w-full  mx-auto">
          <AccordionItem
            value="item-1"
            className="w-full border rounded-md shadow-md mb-2 px-3 cursor-pointer accordion-trigger-style"
          >
            <AccordionTrigger className="cursor-pointer text-xl ">
              Conformidade com LGPD
            </AccordionTrigger>
            <AccordionContent>
              Ao se inscrever na mentoria, você declara expresso CONSENTIMENTO
              que a empresa 55.933.476 ISAAC LUIS DA SILVA FERREIRA, irá
              coletar, tratar os dados necessários ao cumprimento para fins
              identificação do interessado a entrar na mentoria, nos termos do
              Art. 7º, inc. V da LGPD, os dados necessários para cumprimento de
              obrigações legais, nos termos do Art. 7º, inc. II da LGPD, bern
              como os dados, se necessários para proteção ao crédito, conforme
              autorizado pelo Art. 7°, inc. V da LGPD. Seus dados aqui contidos
              serão usados para gerar o pagamento da matrícula e mentoria quando
              for o caso, mas caso você por quaisquer motivos que forem, optar
              por não continuar no processo inscrição na mentoria afirmamos que
              TODOS os seus dados serão excluídos em até 24h após expressa
              comunicação.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
