import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiDotnet, SiAdobeillustrator, SiFigma } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import LogoLoop from '../ui/LogoLoop';

const techLogos = [
    { node: <SiVite className='text-white' />, title: "Vite", href: "https://vite.dev/" },
    { node: <SiReact className='text-white' />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className='text-white' />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className='text-white' />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className='text-white' />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiDotnet className='text-white' />, title: ".NET", href: "https://dotnet.microsoft.com/pt-br/" },
    { node: <TbBrandCSharp className='text-white' />, title: "C#", href: "https://dotnet.microsoft.com/pt-br/languages/csharp" },
    { node: <SiFigma className='text-white' />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiAdobeillustrator className='text-white' />, title: "Illustrator", href: "https://www.adobe.com/br/products/illustrator.html" },



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
                speed={115}
                direction="left"
                logoHeight={55}
                gap={50}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#0b0b0b"
                ariaLabel="Technology partners"
                className='relative flex-col overflow-hidden'
            />
        </div>
    );
}