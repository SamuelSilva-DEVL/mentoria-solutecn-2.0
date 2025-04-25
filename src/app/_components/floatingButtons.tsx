"use client";

import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

export default function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5511999999999" // Substitua com seu número
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Fale conosco no WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className="bg-[#1C4070] hover:bg-[#173458] text-white p-4 rounded-full shadow-lg transition"
        aria-label="Voltar ao topo"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
}
