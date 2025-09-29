import { FaCode, FaCodeBranch, FaCompass } from "react-icons/fa";
import { ButtonCV } from "../ui/ButtonCV";
import TextType from "../ui/TextType";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { BsStars } from "react-icons/bs";
import { StatisticCard } from "../ui/StatisticCard";
import { AiFillCode } from "react-icons/ai";
import { Card } from "../ui/Card";
import { AccordionCard } from "../layouts/AccordionCard";

export function AboutPage() {
  return (
    <div
      id="about"
      className="min-h-screen w-full max-w-(--breakpoint-2xl) mx-auto px-5 md:px-10 pt-20 md:pt-28 items-center text-white font-custom"
    >
      {/* Título da Seção */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500">
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
          <div className="max-w-2xl text-center md:text-left mb-8 md:mb-0 order-2 md:order-0">
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
              className="inline-flex items-center"
            >
              <FaCodeBranch size={20} />
              View Projects
            </ButtonCV>
          </div>

          {/* Avatar */}
          <div className="order-1 md:order-0">
            <Avatar className="border-[0.5px] border-purple-500/50 bg-purple-600 shadow-xl shadow-purple-600/70">
              <AvatarImage src="https://github.com/3predu.png" />
              <AvatarFallback>PL</AvatarFallback>
            </Avatar>
          </div>
        </div>
        {/* Cards estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mb-5">
          <StatisticCard
            icon={AiFillCode}
            title={"Projects"}
            subtitle={"Innovative solutions"}
            value={24}
            href={"#portfolio"}
          />
          <StatisticCard
            icon={FaCompass}
            title={"Years of experience"}
            subtitle={"Continuous learn journey"}
            value={1}
            href={"#certificates"}
          />
          <StatisticCard
            icon={FaCode}
            title={"Tech Stacks"}
            subtitle={"Continuous learn journey"}
            value={12}
            href={"#experience"}
          />
        </div>
      </div>
      {/*Sessão Educação e Experiência Profissional*/}
      <div>
        <div className="p-6 bg-slate-800/50 backdrop-blur-xs rounded-lg shadow-lg border border-slate-700/50">
          <div className="text-white text-2xl sm:text-2xl md:text-3xl font-custom font-semibold mb-4 sm:mb-6 text-center">
            <h1>Education</h1>
          </div>
          <div id="educationCard" className="space-y-4">
            <Card
              logo="/logotipo-ucb.png"
              href="https://ucb.catolica.edu.br/"
              NameInstitution="Catholic University of Brasília"
              degree="Bachelor's Degree in Computer Science"
              period="Ago 2025 - Fev 2028"
            />
            <Card
              logo="/logotipo-ufrn.png"
              href="https://www.ufrn.br/"
              NameInstitution="Federal University of Rio Grande do Norte"
              degree="Bachelor's Degree in Science and Technology"
              period="Ago 2021 - Incomplete"
            />
            <Card
              logo="/logotipo-imd2.jpg"
              href="https://www.metropoledigital.ufrn.br/portal/"
              NameInstitution="Metrópole Digital Institute"
              degree="Nanodegree, Web Developer"
              period="Mar 2020"
              grade="Grade | 8.87"
            />
          </div>
          <div id="expirence" className="text-white text-2xl sm:text-2xl md:text-3xl font-custom font-semibold mb-4 sm:mb-6 text-center mt-8">
            <h1>Professional Expirence</h1>
          </div>
          <div id="experienceAccordion" className="space-y-4">
            <AccordionCard
              logo="/logotipo-sti.jpg"
              position="Design System | Frontend Developer - Remote"
              nameInstitution="STI | IT Department | UFRN"
              period="Jul 2022 - 2023"
              description="
                Refactored Sass, Pug, and JavaScript files for the UFRN Design System by applying the BEM methodology. This initiative led to a file size reduction of up to 94% (from 10,000 to ~600 lines) and improved overall code readability, maintainability, and performance.
                Proposed and designed the implementation of Web Components with JavaScript, creating a more modular, reusable, and scalable architecture for the project. Enhanced the accessibility of web components, ensuring compliance with WCAG 2.1 guidelines and improving the experience for visually impaired users.
              "
            />
          </div>
        </div>
      </div>
    </div >
  );
}
