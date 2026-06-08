'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '911234567890'; // Replace with actual number
const DEFAULT_MESSAGE = "Hi! 👋 I'm interested in learning more about PlaySchl admissions. 🎓";

export default function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      <div
        className={`rounded-2xl bg-white px-5 py-3 shadow-card-hover text-sm font-bold font-heading text-ink transition-all duration-300 whitespace-nowrap border border-leaf-100 ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
        aria-hidden="true"
      >
        Chat with us! 💬
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
        style={{
          animation: 'pulse-soft 3s ease-in-out infinite',
        }}
      >
        <MessageCircle size={28} strokeWidth={2.2} />

        {/* Ping */}
        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-50" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-[#128C7E] border-2 border-white" />
        </span>
      </a>
    </div>
  );
}
