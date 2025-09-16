import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiDotnet } from 'react-icons/si';
import LogoLoop from '../ui/LogoLoop';

const techLogos = [
    { node: <SiReact className='text-white' />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className='text-white' />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className='text-white' />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className='text-white' />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiVite className='text-white' />, title: "Vite", href: "https://vite.dev/" },
    { node: <SiDotnet className='text-white' />, title: ".NET", href: "https://dotnet.microsoft.com/pt-br/" },
    { node: <SiDotnet className='text-white' />, title: ".NET", href: "https://dotnet.microsoft.com/pt-br/" },

];

// Alternative with image sources
// const imageLogos = [
//    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
//];

export function LogosPage() {
    return (
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={55}
                gap={50}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#0b0b0b"
                ariaLabel="Technology partners"
            />
        </div>
    );
}