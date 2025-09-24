import { FaGithub, FaLinkedin } from "react-icons/fa";
import TextType from "../ui/TextType";
import { ButtonCV } from "../ui/ButtonCV";
import { FiDownload } from "react-icons/fi";

export function HomePage() {
  return (
    <div
      id="home"
      className="h-screen relative px-5 md:px-8 xl:px-16 text-white flex justify-center items-center"
    >
      <div
        id="side-info"
        className="relative z-10 w-full max-w-[670px] text-center p-4"
      >
        {/* 1. Títuo */}
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-custom font-bold flex flex-wrap justify-center gap-x-2">
          Software {""}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500">
            Developer
          </span>
        </h1>

        {/* Subtítulo */}
        <TextType
          text={[
            "Computer Science Student",
            "UI | UX Designer",
            "Aspiring Full-Stack Developer",
            "React Developer",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-custom font-normal mt-2"
          textColors={["#ffffff"]}
          cursorCharacter={"|"}
        />

        {/* 2. texto */}
        <p className="text-sm sm:text-base md:text-lg text-center font-custom text-slate-300 mt-5 px-2 sm:px-6">
          Transforming ideas into interactive and seamless digital experiences
          with cutting-edge frontend development.
        </p>

        {/* 3. Botões Links */}
        <div className="flex justify-center items-center mt-7 gap-1">
          <a
            href="https://github.com/3predu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-colors duration-300 m-1"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/3pedro-lucca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-colors duration-300 m-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>

          <div className="ml-2">
            <ButtonCV href="/curriculo.pdf" download="Pedro-Lucca.pdf">
              <FiDownload size={20} />
              <span className="hidden sm:inline">Download CV</span>
            </ButtonCV>
          </div>
        </div>
      </div>
    </div>
  );
}
