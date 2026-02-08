
import { useEffect, useState } from "react";

const ExperienceTimer = ({ startDate }: { startDate: string }) => {
    const [duration, setDuration] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const start = new Date(startDate).getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const diff = now - start;

            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
            const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setDuration({ years, months, days, hours, minutes, seconds });
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, [startDate]);

    return (
        <div className="font-mono text-sm text-gray-300 mt-4 p-4 bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-transparent rounded-lg border-l-4 border-primary-500 inline-block shadow-lg shadow-primary-500/5">
            <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-primary-400 font-semibold mb-0.5">Experience</span>
                <div className="h-px bg-primary-500/20 flex-1" />
            </div>
            <div className="flex items-center gap-2 mt-1">
                <span className="text-white font-bold text-lg">{duration.years}</span><span className="text-xs text-gray-500 -ml-1 mr-1">y</span>
                <span className="text-white font-bold text-lg">{duration.months}</span><span className="text-xs text-gray-500 -ml-1 mr-1">m</span>
                <span className="text-white font-bold text-lg">{duration.days}</span><span className="text-xs text-gray-500 -ml-1 mr-1">d</span>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <span className="text-gray-300 font-medium tabular-nums tracking-widest">
                    {String(duration.hours).padStart(2, "0")}:
                    {String(duration.minutes).padStart(2, "0")}:
                    {String(duration.seconds).padStart(2, "0")}
                </span>
            </div>
        </div>
    );
};

export default ExperienceTimer;
