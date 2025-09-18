import { FaCodeBranch, FaFolderOpen } from "react-icons/fa";
import { ButtonCV } from "../ui/ButtonCV";
import TextType from "../ui/TextType";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { BsStars } from "react-icons/bs";
import { StatisticCard } from "../ui/Cards";

export function AboutPage() {
  return (
    <div
      id="about"
      className="min-h-screen w-full max-w-screen-2xl mx-auto px-5 md:px-10 pt-20 md:pt-28 items-center text-white"
    >
      {/* Título da Seção */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            About Me
          </span>
        </h2>
        <p className="text-base md:text-lg mb-10 md:mb-12 text-white flex items-center justify-center gap-2">
          <BsStars />
          Web Developer and Computer Science Student
          <BsStars />
        </p>
      </div>
      <div className="w-full pt-6 sm:pt-10 relative">
        {/* Seção Principal (Bloco de texto + Avatar) */}
        <div className="gap-8 md:gap-12 mb-16 md:mb-20 flex flex-col md:flex-row items-center justify-between w-full">
          {/* Bloco de Texto */}
          <div className="max-w-2xl text-center md:text-left mb-8 md:mb-0 order-2 md:order-none">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <TextType
                text={[
                  "Hello World! I'm",
                  "Olá Mundo! Eu sou",
                  "Здравствуйте, мир! Я",
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
              <a
                href="https://ufg.br/"
                className="underline hover:text-cyan-500"
              >
                UFG
              </a>
              , I specialize in transforming ideas into digital reality,
              combining clean code and intuitive interfaces.
            </p>
            {/* Botão */}
            <ButtonCV
              href="#portfolio"
              className="inline-flex items-center bg-purple-700 hover:bg-purple-700/70"
            >
              <FaCodeBranch size={20} />
              View Projects
            </ButtonCV>
          </div>

          {/* Avatar */}
          <div className="order-1 md:order-none">
            <Avatar className="border-[0.5px] border-purple-500/50 bg-purple-600 shadow-xl shadow-purple-600/70">
              <AvatarImage src="https://github.com/3predu.png" />
              <AvatarFallback>PL</AvatarFallback>
            </Avatar>
          </div>
        </div>
        {/* Cards estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mb-5">
          <StatisticCard
            icon={FaFolderOpen}
            title={"Projects"}
            subtitle={"Innovative solutions"}
            value={24}
            href={"#portfolio"}
          />
          <StatisticCard
            icon={FaFolderOpen}
            title={"Certificates"}
            subtitle={"Professional skills"}
            value={3}
            href={"#certificates"}
          />
          <StatisticCard
            icon={FaFolderOpen}
            title={"Experience"}
            subtitle={"Continuous journey"}
            value={2.5}
            href={"#experience"}
          />
        </div>
      </div>
    </div>
  );
}
