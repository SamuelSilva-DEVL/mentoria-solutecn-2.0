"use client"; // caso esteja usando app router

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[var(--primary-color-sn)] text-[var(--tertiary-color-sn)] shadow-md border-b-2 border-[var(--tertiary-color-sn)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl">
            <Link href="#home" className="flex items-center gap-2">
              <img
                src="/solutecn.png"
                alt="logo solutecn"
                height={"70"}
                width={"70"}
              ></img>

              Solutecn
            </Link>
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-6 text-base font-medium">
            <li>
              <Link href="#modulos" className="hover:underline">
                Módulos
              </Link>
            </li>
            <li>
              <Link href="#beneficios" className="hover:underline">
                Benefícios da mentoria
              </Link>
            </li>
            <li>
              <Link href="#sobre-mentor" className="hover:underline">
                Mentor
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-2 mt-2 text-base font-medium">
            <li>
              <Link
                href="#modulos"
                className="block py-2 border-b border-white/20"
              >
                Módulos
              </Link>
            </li>
            <li>
              <Link
                href="#beneficios"
                className="block py-2 border-b border-white/20"
              >
                Benefícios da mentoria
              </Link>
            </li>
            <li>
              <Link
                href="#sobre-mentor"
                className="block py-2 border-b border-white/20"
              >
                Mentor
              </Link>
            </li>
            <li>
              <Link href="#faq" className="block py-2">
                FAQ
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
