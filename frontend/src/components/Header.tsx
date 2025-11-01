
export default function Header() {
    return (
        // FIXED + OVERLAY
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            {/* afastamentos do topo e laterais, mantendo o Header redondo sem “bater” nas bordas */}
            <div className="mx-4 mt-4 sm:mx-6 lg:mx-10">
                <div className="mx-auto max-w-6xl pointer-events-auto">
                    <div
                        className={[
                            // layout
                            "relative overflow-hidden",
                            "px-4 sm:px-6 lg:px-8 py-3",
                            // formato “redondo”
                            "rounded-2xl",
                            // efeito glass
                            "bg-white/5 backdrop-blur-[50px]",
                            "border border-white/30",
                            // sombras (externa + insets)
                            "shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)]",
                            // pseudo-elementos gradientes (topo e esquerda)
                            "before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-px",
                            "before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)_100%)]",
                            "after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-px",
                            "after:bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.3)_100%)]",
                        ].join(" ")}
                    >
                        <nav className="flex items-center justify-between gap-4">
                            {/* logo */}
                            <a href="#" className="flex items-center gap-2 no-underline select-none">
                                <span className="inline-block h-8 w-8 rounded-full bg-white/20" />
                                <span className="text-white/90 font-semibold tracking-tight">1%</span>
                            </a>

                            {/* links (desktop) */}
                            <ul className="hidden md:flex items-center gap-6">
                                <li><a href="#features" className="text-white/80 hover:text-white transition">Recursos</a></li>
                                <li><a href="#planos" className="text-white/80 hover:text-white transition">Planos</a></li>
                                <li><a href="#contato" className="text-white/80 hover:text-white transition">Contato</a></li>
                            </ul>

                            {/* CTA */}
                            <a
                                href="#comecar"
                                className="
                                    relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium
                                    bg-white/90 text-black overflow-hidden transition-colors duration-300
                                    hover:text-white focus:outline-none

                                    before:content-[''] before:absolute before:left-1/2 before:top-1/2
                                    before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full
                                    before:w-[220%] before:h-[220%] before:bg-linear-to-r before:from-blue-500 before:to-purple-500
                                    before:scale-0 before:transition-transform before:duration-500 before:ease-out
                                    hover:before:scale-100
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
