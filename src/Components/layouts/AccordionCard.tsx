import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/Accordion"
import SpotlightCard from "./SpotlightCard"

type AccordionCardProps = {
    logo?: string;
    nameInstitution?: string;
    position?: string;
    period?: string;
    description?: string;
}

export function AccordionCard({ logo, nameInstitution, position, period, description }: AccordionCardProps) {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >
            <SpotlightCard className="custom-spotlight-card hover:shadow-[0_0_20px_5px_rgba(139,92,246,0.25)] hover:border-indigo-300" spotlightColor="rgba(147, 51, 234, 1)">
                <AccordionItem
                    value="item-1"
                    className="gap-2 sm:gap-3 sm:p-3 w-full p-6 border rounded-lg border-slate-700/80 bg-black/70 backdrop-blur-xs hover:border-indigo-200 transition-all duration-300"

                >
                    <AccordionTrigger>
                        <div className="flex flex-row items-center gap-4 sm:gap-6 w-full">
                            <div className="w-12 sm:w-14 md:w-16">
                                <img className="h-full w-auto p-1 sm:p-1.5" src={logo} alt="enterprise" />
                            </div>
                            <div>
                                <h4 className="text-xs sm:text-sm font-custom uppercase tracking-wider font-semibold">
                                    {position}
                                </h4>
                                <p className="text-xs sm:text-sm font-custom text-slate-400">
                                    {nameInstitution}
                                </p>
                                <p className="text-xs sm:text-sm font-custom text-slate-400">
                                    {period}
                                </p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance font-custom text-white text-xs sm:text-sm">
                        <p>
                            {description}
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </SpotlightCard>
        </Accordion>
    )
}
