import { FaGithub, FaLinkedin } from 'react-icons/fa';
import DarkVeil from '../backgrounds/DarkVeil';

export function HomePage() {
    return (
        <section
            id="home"
            className="min-h-screen text-white flex flex-col justify-center items-center p-4"
        >
            <DarkVeil />
            <div className="text-center max-w-2xl">
                {/* Título Principal com efeito de gradiente */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hello! I'm {''}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        Pedro Lucca
                    </span>
                </h1>

                {/* Subtítulo */}
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
                    Full-Stack Developer
                </h2>

                {/* Parágrafo de introdução */}
                <p className="text-md md:text-lg text-slate-400 mb-8">
                    ----
                </p>

                {/* Ícones de Redes Sociais */}
                <div className="flex justify-center items-center space-x-6">
                    <a
                        href="https://github.com/3predu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub size={32} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/3pedro-lucca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={32} />
                    </a>
                </div>
            </div>
        </section>
    );
}