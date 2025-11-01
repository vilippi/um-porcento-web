import { Target, Zap, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
    const stats = [
        { icon: Users,      title: "100+ Clientes",  description: "confiaram em nossas soluções" },
        { icon: TrendingUp, title: "300% ROI Médio", description: "de retorno sobre investimento" },
        { icon: Zap,        title: "Entrega Rápida", description: "projetos em tempo recorde" },
        { icon: Target,     title: "99% Satisfação", description: "taxa de clientes satisfeitos" },
    ];

    return (
        <section
            id="sobre"
            className={[
                "py-20 md:py-32",
                "min-h-[60vh]",                         // altura mínima para centralizar melhor
                "flex items-center justify-center",     // centraliza vertical e horizontal
                "bg-[linear-gradient(180deg,hsl(220_25%_98%)_0%,hsl(220_20%_96%)_100%)]",
            ].join(" ")}
        >
            <div className="w-full px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className={["text-3xl md:text-5xl font-bold mb-6","text-[hsl(220_15%_15%)]"].join(" ")}>
                            Somos o 1% Que Faz a Diferença
                        </h2>

                        <div className={["space-y-4 text-lg leading-relaxed","text-[hsl(220_10%_45%)]"].join(" ")}>
                            <p>
                                A <strong className="text-[hsl(220_15%_15%)]">1% Soluções Digitais</strong> nasceu da missão de elevar negócios ao próximo nível através da tecnologia e inovação.
                            </p>
                            <p>
                                Combinamos expertise técnica com visão estratégica para criar soluções digitais que geram resultados mensuráveis e transformam a presença online de nossos clientes.
                            </p>
                            <p className="text-[hsl(220_15%_15%)] font-medium">
                                Não somos apenas desenvolvedores - somos parceiros estratégicos comprometidos com o sucesso do seu negócio.
                            </p>
                        </div>
                    </div>

                    <div
                        className={[
                            "grid gap-6",
                            "sm:grid-cols-2 lg:grid-cols-4",
                            "justify-items-center",        // centraliza os cards dentro das colunas
                        ].join(" ")}
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={[
                                    "p-6 rounded-xl text-center group w-full",
                                    "max-w-[320px]",           // limita a largura do card e ajuda a centralização visual
                                    "bg-[hsl(0_0%_100%)]",
                                    "[box-shadow:0_10px_40px_-10px_hsl(220_85%_45%/.2)]",
                                    "hover:[box-shadow:0_20px_80px_-12px_hsl(190_95%_50%/.35)]",
                                    "transition-shadow duration-300 ease-in-out",
                                ].join(" ")}
                            >
                                <div
                                    className={[
                                        "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center",
                                        "bg-[linear-gradient(135deg,hsl(190_95%_50%)_0%,hsl(220_85%_45%)_100%)]",
                                        "transform group-hover:scale-110 transition-transform duration-300 ease-in-out",
                                    ].join(" ")}
                                >
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className={["font-semibold text-xl mb-2","text-[hsl(220_15%_15%)]"].join(" ")}>
                                    {stat.title}
                                </h3>

                                <p className="text-sm text-[hsl(220_10%_45%)]">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
