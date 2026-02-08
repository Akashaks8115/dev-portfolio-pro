import { projects } from "../data/projects";

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto reveal-on-scroll">
            {/* Header Style "03 // Featured Projects" */}
            <div className="flex items-center gap-4 mb-12">
                <span className="text-primary-500 font-mono text-xl font-medium">03</span>
                <span className="text-primary-500/50 font-mono text-xl">//</span>
                <h2 className="text-3xl font-bold text-white tracking-wide uppercase">Featured Projects</h2>
                <div className="h-px bg-white/10 flex-1 ml-4" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="group bg-gradient-to-br from-[#111827] to-[#0f172a] hover:from-[#111827] hover:to-[#1e1b4b] rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-primary-500/20 flex flex-col"
                    >
                        {/* Image Area */}
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Optional overlay or link icon on hover if desired, but user asked for image style specifically. 
                                The reference image doesn't show a link icon overlay, just the clean card. 
                                But we have a playstoreUrl, so let's make the title clickable or the whole card clickable.
                                Let's keep the title clickable for now.
                             */}
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary-500 transition-colors">
                                    {project.playstoreUrl ? (
                                        <a href={project.playstoreUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {project.title}
                                        </a>
                                    ) : (
                                        project.title
                                    )}
                                </h3>

                                {project.playstoreUrl && (
                                    <a
                                        href={project.playstoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-primary-500 transition-colors"
                                        aria-label={`View ${project.title} on Play Store`}
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M3.609 1.814L13.792 12 3.61 22.186c-.185.185-.436.314-.692.314-.287 0-.54-.156-.692-.41L2.25 1.916c-.003-.27.108-.532.306-.725.266-.265.698-.265.964 0h.089z" />
                                            <path d="M15.75 13.958L5.75 23.958c.954.954 2.506.954 3.46 0l6.54-6.54-3.46-3.46z" />
                                            <path d="M16.48 9.53L19.21 12.26l-2.73 2.73-8.48-8.48c-.954-.954-.954-2.506 0-3.46l8.48 6.48z" />
                                            <path d="M14.2 12.44l3.18 3.18 2.54-2.54c.48-.48.48-1.26 0-1.74l-2.54-2.54-3.18 3.64z" />
                                        </svg>
                                    </a>
                                )}
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                {project.description}
                            </p>

                            {/* Tech Stack Pills - Blue Style */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[10px] font-semibold px-3 py-1 rounded bg-[#1d4ed8]/20 text-blue-400 uppercase tracking-wider"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
