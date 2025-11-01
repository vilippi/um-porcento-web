import { useEffect, useRef, useState } from "react";

export default function Header() {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [mode, setMode] = useState<"dark" | "light">("dark"); // dark = links brancos

    useEffect(() => {
        const sections = Array.from(
            document.querySelectorAll<HTMLElement>("[data-nav-contrast]")
        );

        const update = () => {
            if (!cardRef.current) return;

            // Pega o Y do centro do header (onde os links ficam)
            const r = cardRef.current.getBoundingClientRect();
            const y = r.top + r.height / 2;

            // Acha a section cujo retângulo contém esse Y
            const current = sections.find((sec) => {
                const s = sec.getBoundingClientRect();
                return s.top <= y && s.bottom >= y;
            });

            const attr = (current?.dataset.navContrast as "dark" | "light") || "dark";
            setMode(attr);
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        const ro = new ResizeObserver(update);
        ro.observe(document.body);

        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
            ro.disconnect();
        };
    }, []);

    const linkColor =
        mode === "dark"
            ? "text-white opacity-80 hover:opacity-100"
            : "text-black opacity-80 hover:opacity-100";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            <div className="mx-4 mt-4 sm:mx-6 lg:mx-10">
                <div className="mx-auto max-w-6xl pointer-events-auto">
                    <div ref={cardRef} className="relative rounded-2xl overflow-hidden">
                        {/* camada glass */}
                        <div
                            aria-hidden
                            className="
                                absolute inset-0 rounded-2xl
                                bg-white/5 backdrop-blur-[50px]
                                border border-white/30
                                shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)]
                                before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-px
                                before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)_100%)]
                                after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-px
                                after:bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.3)_100%)]
                                pointer-events-none
                            "
                        />

                        <nav className="relative z-10 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
                            {/* logo */}
                            <a href="#" className="flex items-center gap-2 no-underline select-none" aria-label="Home">
                                <span className="inline-block h-8 w-8 rounded-full bg-white/20" />
                                <span className={`transition ${linkColor} font-semibold tracking-tight`}>1%</span>
                            </a>

                            {/* links (cores controladas pelo estado) */}
                            <ul className="hidden md:flex items-center gap-6">
                                <li><a href="#features" className={`transition ${linkColor}`}>Recursos</a></li>
                                <li><a href="#planos" className={`transition ${linkColor}`}>Planos</a></li>
                                <li><a href="#contato" className={`transition ${linkColor}`}>Contato</a></li>
                            </ul>

                            {/* CTA com bolinha/gradiente e borda que some no hover */}
                            <a
                                href="#comecar"
                                className="
                                    relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium
                                    bg-white/90 text-black overflow-hidden transition-colors duration-300
                                    focus:outline-none focus:ring-2 focus:ring-white/60
                                    border border-black/10 hover:border-transparent z-0

                                    before:content-[''] before:absolute before:left-1/2 before:top-1/2
                                    before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full
                                    before:w-[220%] before:h-[220%]
                                    before:bg-linear-to-r before:from-blue-500 before:to-purple-500
                                    before:scale-0 before:transition-transform before:duration-500 before:ease-out before:z-0
                                    hover:before:scale-100 hover:text-white
                                "
                            >
                                <span className="relative z-10">Começar agora</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
