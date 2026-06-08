'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  emoji: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    emoji: '📅',
    question: 'What are the school timings?',
    answer: 'Our school operates Monday to Saturday. Playgroup & Nursery: 9:00 AM – 12:00 PM. Junior KG & Senior KG: 8:30 AM – 1:30 PM. We also have an optional extended care program until 4:00 PM.',
  },
  {
    emoji: '🎒',
    question: 'What age groups do you accept?',
    answer: 'We accept children from 1.5 years to 5.5 years of age. Our programs include Playgroup (1.5–2.5 years), Nursery (2.5–3.5 years), Junior KG (3.5–4.5 years), and Senior KG (4.5–5.5 years).',
  },
  {
    emoji: '📝',
    question: 'How do I enroll my child?',
    answer: 'Enrollment is simple! You can reach out to us via WhatsApp, phone, or visit our campus. We\'ll give you a tour, discuss your child\'s needs, and guide you through a quick registration form. That\'s it!',
  },
  {
    emoji: '🍱',
    question: 'Do you provide meals or snacks?',
    answer: 'We provide a healthy mid-morning snack daily. Parents are welcome to send a small lunchbox for children in extended programs. We follow strict hygiene and allergen-awareness guidelines.',
  },
  {
    emoji: '🚌',
    question: 'Is transportation available?',
    answer: 'Yes! We offer safe and supervised transport within a 5 km radius of the school. Our vehicles are GPS-tracked and accompanied by a trained attendant at all times.',
  },
  {
    emoji: '👩‍🏫',
    question: 'What is the student-to-teacher ratio?',
    answer: 'We maintain a low ratio of 10:1 for Playgroup and Nursery, and 15:1 for Junior KG and Senior KG, ensuring every child receives personalized attention and care.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-3" role="list">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className={`rounded-3xl border-2 overflow-hidden transition-all duration-300 ${
              isOpen
                ? 'border-candy-200 bg-white shadow-card'
                : 'border-white bg-white hover:border-candy-100'
            }`}
            role="listitem"
          >
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
              className="flex w-full items-center justify-between gap-4 px-6 sm:px-8 py-5 text-left transition-colors hover:bg-candy-50/50"
            >
              <span className="flex items-center gap-3 text-base sm:text-lg font-bold font-heading text-ink">
                <span className="text-xl">{item.emoji}</span>
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-ink-muted transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-candy-400' : ''
                }`}
              />
            </button>

            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 sm:px-8 pb-6 text-sm sm:text-base leading-relaxed text-ink-light pl-[3.25rem] sm:pl-[4.25rem]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
