import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you write all the code manually?",
    answer:
      "We use AI as our engineering team, with expert human direction. This lets us build 10x faster while maintaining quality.",
  },
  {
    question: "What if I need changes after delivery?",
    answer:
      "We offer post-delivery support packages starting at $2,000/month for ongoing maintenance, feature additions, and support.",
  },
  {
    question: "What blockchain do you work with?",
    answer:
      "We primarily work with Ethereum and other EVM-compatible chains like Polygon, Arbitrum, and Base. We can discuss other chains during the consultation.",
  },
  {
    question: "Do you handle design/UX?",
    answer:
      "Yes, we deliver complete products, including a clean and functional user interface. We focus on a great user experience from day one.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
