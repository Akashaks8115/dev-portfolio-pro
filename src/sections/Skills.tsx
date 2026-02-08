import { skills } from "../data/skills";

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 max-w-7xl mx-auto reveal-on-scroll">
            {/* Header */}
            <div className="flex items-center gap-4 mb-16">
                <span className="text-primary-500 font-mono text-xl font-medium">02</span>
                <span className="text-primary-500/50 font-mono text-xl">//</span>
                <h2 className="text-3xl font-bold text-white tracking-wide uppercase">Expertise</h2>
                <div className="h-px bg-white/10 flex-1 ml-4" />
            </div>

            <div className="mb-12">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    My technical <span className="text-primary-500">arsenal.</span>
                </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skills).map(([category, list]) => (
                    <div
                        key={category}
                        className="bg-gradient-to-br from-[#111827] to-[#0f172a] hover:from-[#111827] hover:to-[#1e1b4b] rounded-xl p-6 border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/5 group"
                    >
                        <h4 className="text-lg font-bold mb-6 capitalize text-white group-hover:text-primary-400 transition-colors">
                            {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {list.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-white/5 rounded-md text-xs text-gray-400 border border-white/5 group-hover:bg-primary-500/10 group-hover:border-primary-500/20 group-hover:text-primary-300 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default Skills;
