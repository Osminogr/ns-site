"use client";

import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "Как происходит перенос построек?",
    answer: "Администрация после вайпа выбирает наиболее интересные и значимые с точки зрения ролевого замысла и качества постройки. Они переносятся в новый мир как древние руины, заброшенные крепости или памятники прошлых эпох и вписываются в новый сюжет. Ваша крепость может стать легендарным местом для будущих поколений игроков."
  },
  {
    question: "Обязателен ли отыгрыш роли?",
    answer: "Нет, это Lite RP сервер. Строгие ролевые правила не обязательны, но приветствуются для создания атмосферы. Достаточно просто уважать игру других игроков, не ломать общую концепцию мира и стараться поддерживать атмосферу. Главное — получать удовольствие от игры и не мешать другим."
  },
  {
    question: "Что такое \"связанный сюжет\"?",
    answer: "Каждый сезон логически вытекает из предыдущего. Например, если в первой главе игроки не смогли остановить зло, то во второй главе мир будет больше погружен в тьму и запустение. Если победили — появится новая, но связанная угроза. Ваши коллективные действия определяют, каким будет следующий мир."
  },
  {
    question: "Как долго длится один сезон?",
    answer: "Каждый сезон длится примерно 2 месяца. За это время разворачивается полная сюжетная арка с началом, развитием и завершением. Этого времени достаточно, чтобы построить что-то значительное, но не настолько долго, чтобы вы успели заскучать."
  },
  {
    question: "Какие моды используются на сервере?",
    answer: "Мы используем модпак, специально подобранный для создания атмосферы постапокалиптического выживания с элементами фэнтези. Полный список модов и инструкция по установке доступны в Discord после получения доступа к серверу."
  },
  {
    question: "Можно ли играть соло или нужна команда?",
    answer: "Вы можете играть как в одиночку, так и объединяться с другими игроками. Одиночная игра возможна, но сервер поощряет взаимодействие между игроками — создание поселений, торговлю, союзы и даже конфликты. Многие ивенты рассчитаны на групповое участие."
  }
];

export function FAQSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" className="absolute top-1/4 left-1/4 text-accent">
          <circle cx="30" cy="30" r="2" fill="currentColor" />
        </svg>
        <svg width="60" height="60" className="absolute top-1/3 right-1/3 text-primary">
          <circle cx="30" cy="30" r="1.5" fill="currentColor" />
        </svg>
        <svg width="60" height="60" className="absolute bottom-1/4 left-1/3 text-accent">
          <circle cx="30" cy="30" r="2.5" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/20 text-accent border-accent">
            Частые вопросы
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            Ответы на ваши вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Всё, что вы хотели знать о сервере Endless Story
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card/60 backdrop-blur-sm rounded-lg border border-border/30 p-6 shadow-xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/20 rounded-lg px-6 py-2 hover:bg-card/80 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-accent hover:text-primary transition-colors duration-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg border border-accent/20">
          <h3 className="text-2xl font-bold mb-4 text-accent">
            Остались вопросы?
          </h3>
          <p className="text-muted-foreground mb-6">
            Наше сообщество всегда готово помочь новичкам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="px-4 py-2 text-accent border-accent">
              💬 Активное сообщество
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
              🛠️ Техподдержка 24/7
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-accent border-accent">
              📚 Подробные гайды
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
