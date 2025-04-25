'use client'; // caso esteja usando app router

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1C4070] text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">MinhaMarca</Link>
          </div>

          {/* Botão mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-6 text-base font-medium">
            <li><Link href="/" className="hover:underline">Início</Link></li>
            <li><Link href="/sobre" className="hover:underline">Sobre</Link></li>
            <li><Link href="/servicos" className="hover:underline">Serviços</Link></li>
            <li><Link href="/contato" className="hover:underline">Contato</Link></li>
          </ul>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-2 mt-2 text-base font-medium">
            <li><Link href="/" className="block py-2 border-b border-white/20">Início</Link></li>
            <li><Link href="/sobre" className="block py-2 border-b border-white/20">Sobre</Link></li>
            <li><Link href="/servicos" className="block py-2 border-b border-white/20">Serviços</Link></li>
            <li><Link href="/contato" className="block py-2">Contato</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
