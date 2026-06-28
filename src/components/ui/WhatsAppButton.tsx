"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const phoneNumber = "1234567890";
  const message = "Hello PlaySchl!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-btn${visible ? " wa-visible" : ""}`}
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="30"
        height="30"
      >
        <path d="M12.031 0C5.394 0 0 5.392 0 12.029c0 2.115.548 4.184 1.59 6.002L.056 24l6.108-1.602a12.015 12.015 0 0 0 5.867 1.518h.005c6.634 0 12.03-5.392 12.033-12.03C24.067 5.834 18.667 0 12.031 0zm0 22.024h-.004a10.024 10.024 0 0 1-5.11-1.398l-.367-.217-3.799.996 1.014-3.705-.238-.379A10.038 10.038 0 0 1 1.94 12.03C1.943 6.486 6.452 1.979 12.036 1.979c2.68 0 5.2 1.045 7.094 2.94a10.007 10.007 0 0 1 2.938 7.106c-.004 5.547-4.512 10.054-10.056 10.054zm5.512-7.533c-.302-.15-1.786-.882-2.062-.983-.276-.101-.477-.151-.678.15-.202.302-.782.983-.957 1.185-.175.201-.35.226-.653.075-.302-.15-1.275-.47-2.428-1.5-1.026-.913-1.718-2.042-1.92-2.343-.202-.301-.022-.465.13-.616.136-.135.302-.352.453-.528.151-.176.202-.301.302-.503.1-.202.05-.378-.025-.529-.075-.152-.678-1.636-.93-2.241-.243-.588-.49-.508-.678-.517a13 13 0 0 0-.58-.01c-.2 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.513 0 1.483 1.08 2.916 1.231 3.117.15.201 2.126 3.245 5.148 4.549.719.31 1.28.495 1.718.633.722.23 1.38.197 1.898.12.585-.088 1.786-.73 2.038-1.434.251-.705.251-1.308.175-1.434-.075-.126-.276-.202-.58-.352z" />
      </svg>
    </a>
  );
}
