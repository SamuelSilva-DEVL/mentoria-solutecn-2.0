import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-color-sn)] text-[var(--tertiary-color-sn)]">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Coluna 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">MinhaMarca</h2>
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        {/* Coluna 2 */}
        <nav aria-label="Links principais">
          <h3 className="text-md font-semibold mb-2">Navegação</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#home" className="hover:underline">
                Início
              </Link>
            </li>
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
        </nav>

        {/* Coluna 3 */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contato</h3>
          <ul className="text-sm space-y-1">
            <li>Email: contato@minhamarca.com</li>
            <li>Telefone: (11) 1234-5678</li>
            <li>Endereço: Rua Exemplo, 123</li>
          </ul>
        </div>
      </div>

      <div className="bg-[var(--secondary-color-sn)] text-center text-sm py-3">
        Desenvolvido por{" "}
        <a href="#" className="underline hover:text-gray-300">
          Solutecn
        </a>
      </div>
    </footer>
  );
}
