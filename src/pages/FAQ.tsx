"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HelpCircle } from "lucide-react";
// import the reveal wrapper

const faqs = [
  {
    question: "What makes bamboo products eco-friendly?",
    answer:
      "Bamboo is one of the most sustainable materials on Earth. It grows incredibly fast (up to 3 feet per day), requires no pesticides or fertilizers, and naturally regenerates after harvesting. It also absorbs 35% more CO₂ than equivalent trees, making it excellent for fighting climate change.",
  },
  {
    question: "How do I care for bamboo products?",
    answer:
      "Bamboo products are easy to maintain. For utensils and kitchenware, hand wash with mild soap and warm water, then dry immediately. For textiles, machine wash in cold water and air dry. For furniture and decor, simply wipe with a damp cloth. Avoid prolonged exposure to direct sunlight and excessive moisture.",
  },
  {
    question: "Are bamboo products durable?",
    answer:
      "Yes! Bamboo is actually stronger than many hardwoods and more durable than traditional materials. Our bamboo products are designed to last for years with proper care. Bamboo's natural strength and flexibility make it resistant to warping and cracking.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide! Shipping costs and delivery times vary by location. We use eco-friendly packaging materials and carbon-neutral shipping options whenever possible. You can check specific shipping rates and estimated delivery times at checkout.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee on all our products. If you're not completely happy with your purchase, you can return it for a full refund or exchange. Items must be in their original condition and packaging. Please contact our customer service team to initiate a return.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-secondary/20 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground">
              Everything you need to know about our bamboo products
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)} direction="up">
              <Accordion
                type="single"
                collapsible
                className="w-full rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm transition-all hover:border-primary/40"
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="px-4 text-left text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
