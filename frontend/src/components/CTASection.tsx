import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import type { CSSProperties } from "react";

const CTASection = () => {
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
            id="contato"
            style={vars}
            className="
                relative overflow-hidden
                bg-linear-to-br from-[hsl(var(--primary))]
                via-[hsl(var(--accent))] to-[hsl(var(--secondary))]
                grid place-items-center min-h-[70vh] py-20 md:py-32
            "
        >
            {/* blobs decorativos */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse bg-[hsl(var(--secondary))]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-700 bg-[hsl(var(--accent))]" />
            </div>

            <div className="container px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
                        <Sparkles className="w-4 h-4 text-[hsl(var(--secondary))]" />
                        <span className="text-sm text-white">Inovação que Transforma Negócios</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Pronto para dar o Próximo Passo?
                    </h2>

                    <p className="text-xl text-white/90 mb-10 leading-relaxed">
                        Entre em contato e descubra como acelerar o crescimento do seu negócio com soluções digitais sob medida.
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
                                Solicitar Orçamento
                            </span>
                            <ArrowRight
                                className="
                                    relative z-10 ml-2 h-5 w-5
                                    transition-all duration-300
                                    group-hover:translate-x-1 group-hover:text-white
                                "
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
