import teamHero from "@/assets/team-hero.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const TeamSection = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const teamMembers = [
        { name: "Kayque Miqueias", role: "Founder & Desenvolvedor Full Stack", image: teamMember1, fallback: "KM" },
        { name: "Leonardo Souza", role: "Founder & CEO", image: teamMember2, fallback: "LS" },
        { name: "Vitor Lippi", role: "Founder & Desenvolvedor Full Stack", image: teamMember3, fallback: "VL" },
    ];

    return (
        <section className="py-20 md:py-32" id="quem-somos" data-nav-contrast="light">
            <div className="container max-w-6xl mx-auto px-6">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center mb-20">
                    {/* Left Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(220_15%_15%)]">
                            Quem somos nós?
                        </h2>

                        <div className="space-y-4 text-lg leading-relaxed text-[hsl(220_10%_45%)]">
                            <p>
                                A <strong className="text-[hsl(220_15%_15%)]">1% Soluções Digitais</strong> foi fundada por profissionais
                                apaixonados por tecnologia e inovação, focados em criar soluções digitais que transformam negócios.
                            </p>

                            <p>
                                Sentíamos na pele o caos do mercado digital. A desorganização, a burocracia e a ineficiência eram rotina, e
                                não existia uma ferramenta que unisse a gestão de ponta a ponta para empresas e profissionais.
                            </p>

                            <p className="font-semibold text-[hsl(220_85%_45%)]">
                                Por sermos formados em tecnologia, decidimos que não podíamos apenas esperar: precisávamos criar a solução nós
                                mesmos. E então nasceu a 1% Soluções Digitais, com uma missão dupla: simplificar a transformação digital e
                                elevar o padrão do mercado tech brasileiro.
                            </p>
                        </div>

                        <Button
                            onClick={() => scrollToSection("contato")}
                            size="lg"
                            className="
                                cursor-pointer
                                relative group inline-flex items-center justify-center
                                rounded-full px-8 text-base font-medium
                                bg-white/90 text-black overflow-hidden
                                border-2 border-[hsl(220_85%_45%/0.6)]
                                transition-colors duration-300 hover:text-white
                                hover:border-transparent
                                focus:outline-none
                                mx-auto lg:mx-0

                                before:content-[''] before:absolute before:left-1/2 before:top-1/2
                                before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full
                                before:w-[220%] before:h-[220%]
                                before:bg-linear-to-r
                                before:from-[hsl(220_85%_45%)] before:to-[hsl(260_75%_55%)]
                                before:scale-0 before:transition-transform before:duration-500 before:ease-out
                                hover:before:scale-100

                                shadow-[0_10px_40px_-10px_hsl(220_85%_45%/0.2)]
                            "
                        >
                            <span className="relative z-10">Conheça a 1%</span>
                        </Button>
                    </div>

                    {/* Right Image */}
                    <div className="relative justify-self-center">
                        <div className="relative overflow-hidden rounded-3xl shadow-[0_8px_32px_-8px_hsl(190_95%_50%/0.3)]">
                            <img
                                src={teamHero}
                                alt="Equipe 1% Soluções Digitais"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="space-y-12">
                    <div className="pt-8">
                        <div
                            className="
                                h-px w-full
                                bg-linear-to-r
                                from-[hsl(220_85%_45%)]
                                via-[hsl(260_75%_55%)]
                                to-[hsl(190_95%_50%)]
                            "
                        />
                        <h3
                            className="
                                mt-6 text-sm font-semibold tracking-wider uppercase text-left
                                text-transparent bg-clip-text
                                bg-linear-to-r
                                from-[hsl(220_85%_45%)]
                                via-[hsl(260_75%_55%)]
                                to-[hsl(190_95%_50%)]
                            "
                        >
                            A EQUIPE
                        </h3>
                    </div>

                    <div
                        className="
                            grid md:grid-cols-3
                            gap-0
                            *:p-4
                            *:border-t
                            *:border-[hsl(220_15%_88%/0.8)]
                            [&>*:first-child]:border-t-0
                            md:*:border-l
                            md:[&>*:nth-child(3n+1)]:border-l-0
                            md:[&>*:nth-child(-n+3)]:border-t-0
                        "
                    >
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="
                                    cursor-pointer
                                    group relative flex items-center gap-4 p-4
                                    rounded-xl
                                    *:transition-all *:duration-300 *:ease-in-out
                                    transition-all duration-300 ease-in-out
                                    shadow-[0_6px_22px_-10px_hsl(220_15%_15%/0.08)]
                                    hover:translate-y-0.5
                                    hover:bg-[hsl(220_15%_98%)]
                                    hover:shadow-[0_20px_60px_-12px_hsl(220_85%_45%/0.35)]
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(220_85%_45%/0.4)]
                                "
                                tabIndex={0}
                            >
                                {/* Moldura do avatar com gradiente no hover */}
                                <div
                                    className="
                                        rounded-full p-0.5
                                        bg-[hsl(220_15%_88%)]
                                        group-hover:bg-linear-to-br
                                        group-hover:from-[hsl(220_85%_45%)]
                                        group-hover:via-[hsl(260_75%_55%)]
                                        group-hover:to-[hsl(190_95%_50%)]
                                    "
                                >
                                    <Avatar className="w-16 h-16 rounded-full bg-white">
                                        <AvatarImage src={member.image} alt={member.name} />
                                        <AvatarFallback
                                            className="
                                                text-white font-semibold
                                                bg-[linear-gradient(135deg,hsl(190_95%_50%)_0%,hsl(220_85%_45%)_100%)]
                                            "
                                        >
                                            {member.fallback}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>

                                <div className="text-left">
                                    <h4
                                        className="
                                            font-semibold text-lg
                                            text-[hsl(220_15%_15%)]
                                            group-hover:text-transparent group-hover:bg-clip-text
                                            group-hover:bg-linear-to-br
                                            group-hover:from-[hsl(220_85%_45%)]
                                            group-hover:via-[hsl(260_75%_55%)]
                                            group-hover:to-[hsl(190_95%_50%)]
                                        "
                                    >
                                        {member.name}
                                    </h4>
                                    <p className="text-sm text-[hsl(220_10%_45%)]">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
