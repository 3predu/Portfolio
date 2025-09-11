import { useState } from "react"

const NavLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="
                mt-6 mx-auto max-w-6xl px-6 py-3
                bg-black/30 backdrop-blur-sm
                rounded-3xl
                flex items-center justify-between"

            >
                {/* Logo */}
                <a href="#home"
                    className="flex-1 md:flex-none md:text-left">
                    <span className="
                    font-mono font-bold text-lg sm:text-xl
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500"
                    >
                        pedroLucca.dev();
                    </span>
                </a>
                {/* Links de Navegação Desktop */}
                <div className="hidden xl:flex md:flex items-center gap-8">
                    {NavLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={toggleMenu} // Fecha o menu ao clicar em um link
                            className=" text-md text-slate-200 hover:text-cyan-400 transition-colors font-custom"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                {/* Hamburguer Nav */}
            </nav>
        </header >
    )
}