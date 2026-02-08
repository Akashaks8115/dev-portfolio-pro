import { profile } from "../data/profile";

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-16">
                <span className="text-primary-500 font-mono text-xl font-medium">04</span>
                <span className="text-primary-500/50 font-mono text-xl">//</span>
                <h2 className="text-3xl font-bold text-white tracking-wide uppercase">Experience</h2>
                <div className="h-px bg-white/10 flex-1 ml-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-16">

                {/* Experience Column */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <span className="text-primary-500/80">#</span> Work History
                    </h3>

                    <div className="relative border-l border-white/10 ml-3 pl-8 space-y-12">
                        <div className="relative group">
                            <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-primary-500 border-4 border-[#0b1120] group-hover:scale-125 transition-transform duration-300" />
                            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">Android Developer</h3>
                            <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium mb-1 block">
                                Ether Softex
                            </a>
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">
                                January 2024 - Present <span className="mx-2">•</span> Shivpur, Varanasi
                            </p>
                            <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                Developing and maintaining Flutter applications, integrating REST APIs and Firebase services, and deploying apps to the Play Store. Focused on building scalable and performant mobile solutions.
                            </p>
                        </div>
                        {/* Add more experience items if available */}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <span className="text-primary-500/80">#</span> Education
                    </h3>

                    <div className="space-y-6">
                        {profile.education?.map((edu, index) => (
                            <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-[#111827] to-[#0f172a] hover:from-[#111827] hover:to-[#1e1b4b] border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl cursor-default group">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{edu.degree}</h3>
                                <p className="text-gray-400 text-sm mb-1">{edu.school}</p>
                                <span className="inline-block px-2 py-1 rounded bg-white/5 text-gray-500 text-xs font-medium border border-white/5">
                                    {edu.period}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
