import { ParticlesComponent } from "./particlesComponent";

export function AboutMentor() {
    return (
        <section className="bg-[url('/fundo-texturizado.jpg')] relative overflow-hidden h-full w-full">
            <ParticlesComponent />

            <div className="container mx-auto pt-16 pb-16 px-4 relative">
                <article className="w-4/5 flex flex-col lg:flex-row items-center gap-8 m-auto text-[var(--text-primary-color)]">
                    <div className="w-full lg:w-1/2 space-y-6 z-10" data-aos="fade-right">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-10">
                            Sobre o Mentor
                        </h2>
                        <p className="lg:text-lg">
                        Iniciei minha trajetória profissional trabalhando em uma fábrica de sapatos no interior do Ceará. Ao longo do tempo, atuei como auxiliar de mecânico de motos, garçom, técnico em informática e, por quatro anos, trabalhei em navios de cruzeiros, até que a pandemia chegou.
                        </p>
                        <p className="lg:text-lg">
                        Durante esse período desafiador, precisei encontrar uma forma de trabalhar em casa e garantir uma boa renda. Foi então que comecei a estudar sobre a profissão de "Analista de Software". Fiz um curso básico semelhante a esse e, alguns meses depois, já estava empregado.
                        </p>
                        <p className="lg:text-lg">
                        Três anos mais tarde, atuo como analista profissional de software. Nesse período, tive a oportunidade de testar diversos sites e aplicativos móveis, incluindo os de grandes bancos, plataformas como o Vapt Vupt, o SESI, e de empresas do setor petrolífero. Graças a essa profissão, hoje minha família vive com bastante conforto e segurança.
                        </p>
                    </div>
                    <div className="space-y-6" data-aos="fade-left" style={{zIndex: 0}}>
                        <img src="/imagem-perfil2.png"></img>
                    </div>
                </article>
            </div>
        </section>
    );
}