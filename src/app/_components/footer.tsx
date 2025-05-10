import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-color-sn)] text-[var(--tertiary-color-sn)]">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Coluna 1 */}
        <div className="flex flex-col items-start  md:items-center gap-3">
          <div className="flex items-center gap-2">
            <img
              src="/solutecn.png"
              alt="logo solutecn"
              height={"80"}
              width={"80"}
            ></img>
            <p className="text-2xl">Solutecn</p>
          </div>
          
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
            <li>Email: <a href="mailto:isaque.solutecn@gmail.com">isaac.solutecn@gmail.com</a></li>
            <li>Telefone: <a href="tel:+5588994822506">(88) 99482-2506</a></li>
            <li>Linkedin: <a href="http://www.linkedin.com/in/isaac-ferreira-737428223" className="underline" target="_blank">Isaac Ferreira</a></li>
            <li>Empresa: 55.933.476 ISAAC LUIS DA SILVA FERREIRA</li>
            <li>CNPJ: 55.933.476/0001-77</li>
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
