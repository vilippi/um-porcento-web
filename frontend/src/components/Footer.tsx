import { Mail, Linkedin, Instagram, Globe } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="
                py-16
                bg-[hsl(260_75%_55%)]
                text-[hsl(0_0%_100%)]
            "
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Coluna marca */}
                    <div className="lg:col-span-2">
                        <h3
                            className="
                                text-2xl font-bold mb-4 
                                text-transparent bg-clip-text 
                                bg-[linear-gradient(135deg,hsl(190_95%_50%)_0%,hsl(220_85%_45%)_100%)]
                            "
                        >
                            1% Soluções Digitais
                        </h3>

                        <p className="leading-relaxed mb-6 max-w-md text-[hsl(0_0%_100%/0.8)]">
                            Transformamos ideias em experiências digitais excepcionais. Somos o 1% que faz a diferença no seu negócio.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="
                                    w-10 h-10 rounded-full
                                    flex items-center justify-center
                                    backdrop-blur-sm
                                    bg-[hsl(0_0%_100%/0.1)]
                                    text-[hsl(0_0%_100%/0.85)]
                                    transition-all duration-300 ease-in-out
                                    hover:bg-[hsl(190_95%_50%)] hover:text-[hsl(220_30%_8%)]
                                    shadow-[0_8px_32px_-8px_hsl(190_95%_50%/0.35)]
                                "
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="
                                    w-10 h-10 rounded-full
                                    flex items-center justify-center
                                    backdrop-blur-sm
                                    bg-[hsl(0_0%_100%/0.1)]
                                    text-[hsl(0_0%_100%/0.85)]
                                    transition-all duration-300 ease-in-out
                                    hover:bg-[hsl(190_95%_50%)] hover:text-[hsl(220_30%_8%)]
                                    shadow-[0_8px_32px_-8px_hsl(190_95%_50%/0.35)]
                                "
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Coluna links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
                        <div className="space-y-3">
                            <a
                                href="#sobre"
                                className="
                                    block transition-all duration-300 ease-in-out
                                    text-[hsl(0_0%_100%/0.8)]
                                    hover:text-[hsl(190_95%_50%)]
                                "
                            >
                                Sobre Nós
                            </a>
                            <a
                                href="#servicos"
                                className="
                                    block transition-all duration-300 ease-in-out
                                    text-[hsl(0_0%_100%/0.8)]
                                    hover:text-[hsl(190_95%_50%)]
                                "
                            >
                                Serviços
                            </a>
                            <a
                                href="#planos"
                                className="
                                    block transition-all duration-300 ease-in-out
                                    text-[hsl(0_0%_100%/0.8)]
                                    hover:text-[hsl(190_95%_50%)]
                                "
                            >
                                Planos
                            </a>
                            <a
                                href="#contato"
                                className="
                                    block transition-all duration-300 ease-in-out
                                    text-[hsl(0_0%_100%/0.8)]
                                    hover:text-[hsl(190_95%_50%)]
                                "
                            >
                                Contato
                            </a>
                        </div>
                    </div>

                    {/* Coluna contato */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contato</h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:contato@1porcento.digital"
                                className="
                                    flex items-center gap-2
                                    transition-all duration-300 ease-in-out
                                    text-[hsl(0_0%_100%/0.8)]
                                    hover:text-[hsl(190_95%_50%)]
                                "
                            >
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">contato@1porcento.digital</span>
                            </a>

                            <a
                                href="https://1porcento.digital"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex items-center gap-2
                                    transition-all duration-300 ease-in-out
                                    text-[hsl(0_0%_100%/0.8)]
                                    hover:text-[hsl(190_95%_50%)]
                                "
                            >
                                <Globe className="w-4 h-4" />
                                <span className="text-sm">www.1porcento.digital</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="
                        pt-8 text-center text-sm
                        border-t border-[hsl(0_0%_100%/0.2)]
                        text-[hsl(0_0%_100%/0.6)]
                    "
                >
                    <p>&copy; {currentYear} 1% Soluções Digitais. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
