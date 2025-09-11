import { FaGithub, FaLinkedin } from 'react-icons/fa';
import DarkVeil from '../backgrounds/DarkVeil';
import TextType from '../ui/TextType';
import { ButtonCV } from '../ui/ButtonCV';
import { FiDownload } from 'react-icons/fi';

export function HomePage() {
    return (
        <section
            id="home"
            className="min-h-screen text-white flex flex-col justify-center items-center p-4 sm:p-6 md:p-8" // Espaçamento responsivo
        >
            <DarkVeil />
            <div id="side-info" className="w-full max-w-[670px] mx-auto text-center">

                {/* 1. Tipografia responsiva no Título */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-custom font-bold mb-4 flex flex-wrap justify-center gap-x-2">
                    Software {''}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        Developer
                    </span>
                </h1>

                {/* Subtítulo com um pouco de margem */}
                <TextType
                    text={[
                        "Computer Science Student",
                        "UI | UX Designer",
                        "Full-Sack Developer",
                        "React Developer",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-custom font-normal mt-2" // Tipografia e margem
                />

                {/* 2. Tipografia e espaçamento responsivo no Parágrafo */}
                <p className="text-sm sm:text-base md:text-lg text-center font-custom text-slate-400 mt-5 px-2 sm:px-6">
                    Desenvolvedor Full-Stack e Designer UI/UX.
                    Com experiência em projetos para as universidades <a href="https://sti.ufrn.br/" className="underline hover:text-cyan-500"> STI | UFRN </a>
                    e <a href="https://ufg.br/" className="underline hover:text-cyan-500">UFG</a>, sou especialista em transformar ideias em realidade digital, combinando código limpo e interfaces intuitivas.
                </p>

                {/* 3. Espaçamento responsivo e botão adaptável */}
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-7">
                    <a href="..." aria-label="GitHub" className="...">
                        <FaGithub size={32} />
                    </a>
                    <a href="..." aria-label="LinkedIn" className="...">
                        <FaLinkedin size={32} />
                    </a>

                    <div>
                        <ButtonCV href="/curriculo.pdf" download="Pedro-Lucca.pdf">
                            <FiDownload size={20} />
                            <span className="hidden sm:inline ml-2">Download CV</span>
                        </ButtonCV>
                    </div>
                </div>
            </div>
        </section>
    );
}