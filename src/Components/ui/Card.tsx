import SpotlightCard from "../layouts/SpotlightCard";

export interface Education {
    logo?: string;
    NameInstitution?: string;
    href?: string;
    degree?: string;
    period?: string;
    grade?: string;
}

export function Card({
    logo,
    NameInstitution,
    href,
    degree,
    period,
    grade

}: Education) {
    return (
        <div className=" gap-3 sm:gap-4 p-1 sm:p-1.5">
            <SpotlightCard className="custom-spotlight-card hover:shadow-[0_0_20px_5px_rgba(139,92,246,0.25)] hover:border-indigo-300" spotlightColor="rgba(147, 51, 234, 1)">
                <a className="flex flex-row items-center gap-2 sm:gap-3 sm:p-3 w-full p-6 
                                    border rounded-lg border-slate-700/80 bg-black/70 backdrop-blur-xs hover:border-indigo-200
                                    transition-all duration-300
                                    "
                    href={href}
                    target="_blank"
                >
                    <div className="w-16 sm:w-20 md:w-22">
                        <img className="h-full w-auto p-1 sm:p-1.5" src={logo} alt="University" />
                    </div>
                    <div>
                        <h4 className="text-xs sm:text-sm font-custom uppercase tracking-wider font-semibold">
                            {NameInstitution}
                        </h4>
                        <p className="text-xs sm:text-sm font-custom text-slate-400">
                            {degree}
                        </p>
                        <p className="text-xs sm:text-sm font-custom text-slate-400">
                            {period}
                        </p>
                        <p className="text-xs sm:text-sm font-custom text-slate-400">
                            {grade}
                        </p>
                    </div>
                </a>
            </SpotlightCard>
        </div>
    )
}