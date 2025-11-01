import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import type { CSSProperties } from "react";

const HeroSection = () => {
    const handleContactClick = () => {
        document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    };

    const vars = {
        "--primary": "220 85% 45%",   // azul
        "--accent": "260 75% 55%",    // roxo
        "--secondary": "190 95% 50%", // ciano
    } as CSSProperties;

    return (
        <section
            id="hero" data-nav-contrast="dark"
            style={vars}
            className="
                relative min-h-screen overflow-hidden
                grid place-items-center
                bg-linear-to-br from-[hsl(var(--primary))]
                via-[hsl(var(--accent))] to-[hsl(var(--secondary))]
            "
        >
            {/* blobs decorativos não interferem no clique nem no layout */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse bg-[hsl(var(--secondary))]" />
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse delay-1000 bg-[hsl(var(--accent))]" />
            </div>

            {/* conteúdo centralizado */}
            <div className="container relative z-10 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
                        <Rocket className="w-4 h-4 text-[hsl(var(--secondary))]" />
                        <span className="text-sm text-white">Inovação que Transforma Negócios</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Transforme Seu Negócio com{" "}
                        <span
                        className="
                            text-transparent bg-clip-text
                            bg-[linear-gradient(90deg,hsl(var(--secondary)),hsl(var(--primary))),
                                linear-gradient(180deg,rgba(255,255,255,.95),rgba(255,255,255,.35) 45%,rgba(255,255,255,.08))]
                            [background-blend-mode:overlay,normal]
                            [text-shadow:0_1px_0_rgba(255,255,255,.6),0_-1px_0_rgba(0,0,0,.2)]
                            filter-[drop-shadow(0_0_14px_rgba(255,255,255,.25))]
                        "
                    >
                        Soluções Digitais
                    </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-3xl mx-auto">
                        Na 1%, criamos experiências digitais que elevam sua marca e impulsionam resultados reais.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={handleContactClick}
                            className="
                                relative overflow-hidden cursor-pointer group
                                text-black bg-[hsl(var(--secondary))]
                                shadow-[0_8px_32px_-8px_hsl(var(--secondary)/0.3)]
                                text-lg px-8 py-6 transition-colors duration-300

                                before:content-[''] before:absolute before:inset-0
                                before:bg-[hsl(var(--accent)/0.95)]
                                before:-translate-x-full hover:before:translate-x-0
                                before:transition-transform before:duration-300
                            "
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                Começar Agora
                            </span>
                            <ArrowRight
                                className="
                                    relative z-10 ml-2 h-5 w-5
                                    transition-all duration-300
                                    group-hover:translate-x-1 group-hover:text-white
                                "
                            />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                            className="cursor-pointer border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-sky-500 hover:border-sky-500 text-lg px-8 py-6 transition-all"
                        >
                            Nossos Serviços
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
