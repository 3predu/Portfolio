import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const NavLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  //{ href: "#stacks", label: "Stacks" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0, y: -20, transition: { ease: "easeInOut" } },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  {
    {/*Definindo a animação botão navbar*/ }
  }
  const iconVariants: Variants = {
    hidden: { opacity: 0, rotate: -90, scale: 0.8 }, // estado inicial
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    }, // estado final
    exit: {
      opacity: 0,
      rotate: 90,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeOut" },
    }, // ao desaparecer
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4">
      <nav
        className="
                    relative mt-6 mx-auto max-w-6xl px-6 py-3 flex items-center justify-between
                    backdrop-blur-lg bg-black/50 rounded-full 
                    shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_2px_8px_0_rgba(0,0,0,0.16)] border-white/10 border-[0.5px]
                "
      >
        {/* Logo */}
        <a href="#home" className="flex-1 md:flex-none md:text-left">
          <span className="font-mono font-bold text-lg sm:text-xl text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-pink-400 to-purple-500">
            pedroLucca.dev();
          </span>
        </a>

        {/* Links Desktop */}
        <div className="font-custom hidden md:flex items-center gap-8">
          {NavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-md text-slate-200 hover:text-cyan-400 transition-colors font-custom"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botão Hambúrguer */}
        <button
          onClick={toggleMenu}
          className="
                        relative flex items-center justify-center md:hidden
                        text-white z-50 h-7 w-7
                    "
        >
          {/* Gerenciador de Animações*/}
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute"
              >
                <HiX size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute"
              >
                <HiMenu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>
      {/* Quando o menu vai ser aberto */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
                      absolute top-14 left-6 right-6 backdrop-blur-xl rounded-2xl p- flex flex-col items-start gap-6 md:hidden
                      mt-6 mx-auto max-w-6xl px-6 py-3 justify-between bg-black/80 border-white/10 border-[0.5px]
            "
          >
            {NavLinks.map((link) => (
              <motion.a
                key={link.href}
                variants={linkVariants}
                href={link.href}
                onClick={toggleMenu}
                className="text-lg text-slate-200 transition-colors font-custom w-full block py-2"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
