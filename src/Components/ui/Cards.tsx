import { FiArrowUpRight } from "react-icons/fi";
import SpotlightCard from "../layouts/SpotlightCard";
import CountUp from "./CountUp";

type StatisticCardProps = {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    value: number;
    href: string;
};

export function StatisticCard({
    icon: Icon,
    title,
    subtitle,
    value,
    href,
}: StatisticCardProps) {
    return (
        < SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(147, 51, 234, 1)" >
            <a
                href={href}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700/50 flex items-center gap-6"
            >
                {/* Icone */}
                <div className="bg-gradient-to-br from-purple-600 to-cyan-500 p-3 rounded-lg">
                    <Icon size={24} className="text-white" />
                </div>
                {/* Texto */}
                <div className="flex-grow">
                    <p className="text-xs font-custom uppercase tracking-wider font-semibold">
                        {title}
                    </p>
                    <p className="text-sm font-custom text-slate-400">
                        {subtitle}
                    </p>
                </div>
                <div className="flex flex-row items-end">
                    {/* Quantidade */}
                    <div className="text-4xl font-bold text-white pr-2">
                        <CountUp
                            from={0}
                            to={value}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />
                    </div>
                    {/* Seta */}
                    <FiArrowUpRight
                        size={20}
                        className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-300"
                    />
                </div>
            </a>
        </SpotlightCard >
    );
}
