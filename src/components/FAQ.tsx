import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Koçumu kendim seçebiliyor muyum ?",
    answer: "Evet, kendiniz seçebilirsiniz.",
    value: "item-1",
  },
  {
    question: "Koçluk görüşmeleri nasıl oluyor ?",
    answer:
      "Her hafta koçunuzla belirlediğiniz gün ve saatte Zoom ya da benzeri bir platform üzerinden canlı olarak görüşme yapıyorsunuz.",
    value: "item-2",
  },
  {
    question:
      "Koçluk görüşmelerinde süre sınırı var mı ?",
    answer:
      "Hayır, görüşmelerde herhangi bir süre sınırı bulunmamaktadır.",
    value: "item-3",
  },
  {
    question: "Koçum günlük olarak çalışmalarımı takip ediyor mu ?",
    answer: " Evet, koçun tarafından her gün yaptığın çalışmalar takip edilip sana geri bildirim veriliyor.",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Hakkımızda{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-blue-800 bg-clip-text">
          Sıkça Sorulanlar
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
