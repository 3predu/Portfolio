import { FaCodeBranch } from "react-icons/fa";
import { ButtonCV } from "../ui/ButtonCV";
import TextType from "../ui/TextType";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";

export function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-screen p-8 md:p-16 flex flex-col items-center text-white"
    >
      {/* Título da Seção */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          About Me
        </span>
      </h2>
      <p className="text-md md:text-lg text-slate-400 mb-12">
        <span className="text-cyan-400">✨</span> Engenheiro de Software &
        Entusiasta de Dados <span className="text-cyan-400">✨</span>
      </p>

      {/* Seção Principal (Texto e Imagem) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full mb-20">
        {/* Bloco de Texto */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0 order-2 md:order-none">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <TextType
              text={[
                "Hello World! I'm",
                "Olá Mundo! Eu sou",
                "Здравствуйте, мир! Я —",
                "你好世界，我是",
                "やあ世界、私は",
                "안녕 세상아, 나는",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              className=""
              variant="gradient"
            />
            <span className="text-white">Pedro Lucca</span>
          </h3>
          <p className="text-md md:text-lg text-white leading-relaxed mb-6">
            Web Developer and UI/UX Designer. With experience in projects for
            the universities{" "}
            <a
              href="https://sti.ufrn.br/"
              className="underline hover:text-cyan-500"
            >
              {" "}
              STI | UFRN{" "}
            </a>{" "}
            and{" "}
            <a href="https://ufg.br/" className="underline hover:text-cyan-500">
              UFG
            </a>
            , I specialize in transforming ideas into digital reality, combining
            clean code and intuitive interfaces.
          </p>
          <ButtonCV
            href="#portfolio"
            className="bg-purple-600 hover:bg-purple-700 "
          >
            <FaCodeBranch size={20} />
            Ver Projetos
          </ButtonCV>
        </div>

        {/* Avatar */}
        <div className="order-1 md:order-none">
          <Avatar className="border-4 border-purple-500/50">
            <AvatarImage src="" />
            <AvatarFallback>PL</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1: Total Projects */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center shadow-lg border border-slate-700/50 hover:border-cyan-400 transition-colors duration-300">
          <div className="text-4xl font-bold text-cyan-400 mb-2">25</div>
          <p className="text-sm text-slate-300 uppercase tracking-wide mb-4">
            Total de Projetos
          </p>
          <a
            href="#portfolio"
            className="text-purple-400 hover:text-purple-500 flex items-center justify-center text-sm gap-1"
          >
            Ver detalhes <span className="text-lg">›</span>
          </a>
        </div>

        {/* Card 2: Certificates */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center shadow-lg border border-slate-700/50 hover:border-cyan-400 transition-colors duration-300">
          <div className="text-4xl font-bold text-cyan-400 mb-2">90</div>
          <p className="text-sm text-slate-300 uppercase tracking-wide mb-4">
            Certificados
          </p>
          <a
            href="#certificates"
            className="text-purple-400 hover:text-purple-500 flex items-center justify-center text-sm gap-1"
          >
            Ver detalhes <span className="text-lg">›</span>
          </a>
        </div>

        {/* Card 3: Years of Experience */}
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center shadow-lg border border-slate-700/50 hover:border-cyan-400 transition-colors duration-300">
          <div className="text-4xl font-bold text-cyan-400 mb-2">1.5</div>
          <p className="text-sm text-slate-300 uppercase tracking-wide mb-4">
            Anos de Experiência
          </p>
          <a
            href="#experience"
            className="text-purple-400 hover:text-purple-500 flex items-center justify-center text-sm gap-1"
          >
            Ver detalhes <span className="text-lg">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
