import { FaCodeBranch } from 'react-icons/fa';
import { ButtonCV } from '../ui/ButtonCV';

export function AboutPage() {
    return (
        <section id="about" className="min-h-screen p-8 md:p-16 flex flex-col items-center text-white">
            {/* Título da Seção */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">About Me</span>
            </h2>
            <p className="text-md md:text-lg text-slate-400 mb-12">
                <span className="text-cyan-400">✨</span> Engenheiro de Software & Entusiasta de Dados <span className="text-cyan-400">✨</span>
            </p>

            {/* Seção Principal (Texto e Imagem) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full mb-20">
                {/* Bloco de Texto */}
                <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Hello World, I' m <br />
                        <span className="text-white">Pedro Lucca</span>
                    </h3>
                    <p className="text-md md:text-lg text-slate-300 leading-relaxed mb-6">
                        Sou um desenvolvedor apaixonado por transformar ideias complexas em soluções digitais elegantes e eficientes. Com experiência em React, TypeScript e Tailwind CSS, adoro construir interfaces de usuário intuitivas e de alta performance. Meu foco é sempre em código limpo, modular e escalável, buscando constantemente novas tecnologias para aprimorar minhas habilidades e entregar projetos de impacto.
                    </p>
                    <ButtonCV href="#portfolio" className="bg-purple-600 hover:bg-purple-700 ">
                        <FaCodeBranch size={20} />
                        Ver Projetos
                    </ButtonCV>
                </div>

                {/* Imagem de Perfil */}
                <div className="flex-none w-64 h-64 md:w-80 md:h-80 relative">
                    <img
                        src="https://via.placeholder.com/300/609B9B/FFFFFF?text=Sua+Foto" // Placeholder
                        alt="Sua Foto de Perfil"
                        className="rounded-full w-full h-full object-cover shadow-lg border-4 border-cyan-400/50"
                    />
                    {/* Efeito de anel externo como na referência */}
                    <div className="absolute inset-0 rounded-full border-4 border-purple-500/50 animate-pulse-slow" />
                </div>
            </div>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {/* Card 1: Total Projects */}
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center shadow-lg border border-slate-700/50 hover:border-cyan-400 transition-colors duration-300">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">25</div>
                    <p className="text-sm text-slate-300 uppercase tracking-wide mb-4">Total de Projetos</p>
                    <a href="#portfolio" className="text-purple-400 hover:text-purple-500 flex items-center justify-center text-sm gap-1">
                        Ver detalhes <span className="text-lg">›</span>
                    </a>
                </div>

                {/* Card 2: Certificates */}
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center shadow-lg border border-slate-700/50 hover:border-cyan-400 transition-colors duration-300">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">90</div>
                    <p className="text-sm text-slate-300 uppercase tracking-wide mb-4">Certificados</p>
                    <a href="#certificates" className="text-purple-400 hover:text-purple-500 flex items-center justify-center text-sm gap-1">
                        Ver detalhes <span className="text-lg">›</span>
                    </a>
                </div>

                {/* Card 3: Years of Experience */}
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center shadow-lg border border-slate-700/50 hover:border-cyan-400 transition-colors duration-300">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">1.5</div>
                    <p className="text-sm text-slate-300 uppercase tracking-wide mb-4">Anos de Experiência</p>
                    <a href="#experience" className="text-purple-400 hover:text-purple-500 flex items-center justify-center text-sm gap-1">
                        Ver detalhes <span className="text-lg">›</span>
                    </a>
                </div>
            </div>
        </section>
    );
}