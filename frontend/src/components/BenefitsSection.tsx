import { useEffect, useMemo, useRef, useState } from "react";
import { Code2, Palette, Rocket, Shield, Smartphone, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

const BenefitsSection = () => {
    const services = useMemo(() => ([
        { icon: Code2, title: "Desenvolvimento Web", description: "Sites e aplicações web modernas, responsivas e otimizadas para conversão." },
        { icon: Smartphone, title: "Apps Mobile", description: "Aplicativos nativos e híbridos para iOS e Android com UX excepcional." },
        { icon: Palette, title: "UI/UX Design", description: "Interfaces intuitivas e atrativas que encantam usuários e facilitam a jornada." },
        { icon: TrendingUp, title: "Marketing Digital", description: "Estratégias data-driven para aumentar sua presença online e gerar leads." },
        { icon: Rocket, title: "Consultoria Tech", description: "Orientação estratégica para transformação digital e inovação tecnológica." },
        { icon: Shield, title: "Segurança & Cloud", description: "Infraestrutura segura e escalável na nuvem para seu negócio." }
    ]), []);

    // ----- CARROSSEL (mobile/tablet) -----
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [index, setIndex] = useState(0);

    const slideTo = (i: number) => {
        const track = trackRef.current;
        if (!track) return;
        const slides = Array.from(track.children) as HTMLElement[];
        const clamped = Math.max(0, Math.min(i, slides.length - 1));
        slides[clamped]?.scrollIntoView({ behavior: "smooth", inline: "start" });
        setIndex(clamped);
    };

    const next = () => slideTo(index + 1);
    const prev = () => slideTo(index - 1);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const onScroll = () => {
            const slides = Array.from(track.children) as HTMLElement[];
            if (!slides.length) return;
            const offsets = slides.map((el) => Math.abs((el.offsetLeft ?? 0) - track.scrollLeft));
            const nearest = offsets.indexOf(Math.min(...offsets));
            setIndex(nearest);
        };
        track.addEventListener("scroll", onScroll, { passive: true });
        return () => track.removeEventListener("scroll", onScroll);
    }, []);

    // Card base (mesmo CSS + sombras mais fortes)
    const Card = ({ Icon, title, description }: { Icon: any; title: string; description: string }) => (
        <div
            className="
                group p-8 rounded-2xl
                bg-[hsl(0_0%_100%)]
                shadow-[0_16px_60px_-12px_hsl(220_85%_45%/0.28)]
                hover:shadow-[0_24px_80px_-12px_hsl(190_95%_50%/0.45)]
                transition-[transform,box-shadow] duration-300 ease-in-out
                hover:-translate-y-0.5
                border border-[hsl(220_15%_88%)]
            "
        >
            <div
                className="
                    w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                    bg-[linear-gradient(135deg,hsl(190_95%_50%)_0%,hsl(220_85%_45%)_100%)]
                    group-hover:scale-110 transition-transform duration-300 ease-in-out
                    shadow-[0_16px_36px_-10px_hsl(190_95%_50%/0.45)]
                "
            >
                <Icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="leading-relaxed text-[hsl(220_10%_45%)]">{description}</p>
        </div>
    );

    return (
        <section
            id="servicos" data-nav-contrast="light"
            className="
                py-20 md:py-32
                bg-[hsl(220_25%_97%)]
                text-[hsl(220_15%_15%)]
            "
        >
            <div className="container px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Soluções Completas para Seu Negócio Digital
                    </h2>
                    <p className="text-xl text-[hsl(220_10%_45%)]">
                        Da estratégia à execução, tudo que você precisa para dominar o digital
                    </p>
                </div>

                {/* MOBILE/TABLET: carrossel */}
                <div className="md:hidden">
                    <div className="relative">
                        {/* trilha */}
                        <div
                            ref={trackRef}
                            className="
                                flex gap-6
                                overflow-x-auto
                                snap-x snap-mandatory
                                scroll-pl-6 pr-6
                                [-ms-overflow-style:none] [scrollbar-width:none]
                                [&::-webkit-scrollbar]:hidden
                            "
                        >
                            {services.map((s, i) => (
                                <div key={i} className="snap-start shrink-0 w-[85%] sm:w-[70%]">
                                    <Card Icon={s.icon} title={s.title} description={s.description} />
                                </div>
                            ))}
                        </div>

                        {/* Controles */}
                        <div className="flex items-center justify-between mt-6">
                            <button
                                type="button"
                                onClick={prev}
                                disabled={index === 0}
                                className="
                                    inline-flex items-center justify-center
                                    h-10 w-10 rounded-full
                                    bg-white/90 border border-[hsl(220_15%_88%)]
                                    shadow-[0_10px_30px_-10px_hsl(220_85%_45%/0.35)]
                                    disabled:opacity-40
                                    transition-colors hover:bg-white
                                "
                                aria-label="Anterior"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            {/* Dots */}
                            <div className="flex items-center gap-2">
                                {services.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => slideTo(i)}
                                        aria-label={`Ir para slide ${i + 1}`}
                                        className={`
                                            h-2 w-2 rounded-full transition-[width,background-color] duration-300
                                            ${index === i
                                                ? "w-5 bg-[hsl(220_85%_45%)]"
                                                : "bg-[hsl(220_15%_88%)] hover:bg-[hsl(220_10%_70%)]"}
                                        `}
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={next}
                                disabled={index === services.length - 1}
                                className="
                                    inline-flex items-center justify-center
                                    h-10 w-10 rounded-full
                                    bg-white/90 border border-[hsl(220_15%_88%)]
                                    shadow-[0_10px_30px_-10px_hsl(220_85%_45%/0.35)]
                                    disabled:opacity-40
                                    transition-colors hover:bg-white
                                "
                                aria-label="Próximo"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* DESKTOP: grid original (mantido) */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <Card key={i} Icon={s.icon} title={s.title} description={s.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
