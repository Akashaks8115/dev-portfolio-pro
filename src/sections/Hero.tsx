 
const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative pt-32 pb-20 px-6 overflow-hidden reveal-on-scroll"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">

                {/* Left Column: Text Content */}
                <div className="flex-1 max-w-2xl lg:max-w-xl text-center lg:text-left z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Open for collaboration
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-[1.1]">
                        Creating digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-xy bg-[length:200%_200%]">
                            masterpieces
                        </span>.
                    </h1>

                    <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                        I'm <span className="text-white font-semibold">Akash Maurya</span>, a Flutter Developer crafting high-performance mobile experiences with a focus on scale and precision.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10 text-center"
                        >
                            Explore Projects
                        </a>
                        <a
                            href="#about"
                            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all transform hover:-translate-y-1 text-center backdrop-blur-sm"
                        >
                            About Me
                        </a>
                    </div>
                </div>

                {/* Right Column: Code Editor Mockup */}
                <div className="flex-1 w-full max-w-xl lg:max-w-2xl relative z-10 perspective-1000">
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20 -z-10 animate-pulse" />

                    <div className="bg-[#0f111a] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform rotate-y-12 hover:rotate-y-0 transition-transform duration-500 ease-out">
                        {/* Window Header */}
                        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 text-xs text-gray-500 font-mono">
                                developer_profile.dart
                            </div>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                            <div className="text-gray-300">
                                <span className="text-purple-400">class</span> <span className="text-yellow-300">AkashDeveloper</span> <span className="text-gray-400">{`{`}</span>
                            </div>

                            <div className="ml-4 mt-2">
                                <span className="text-purple-400">String</span> <span className="text-blue-300">specialty</span> = <span className="text-green-300">'Flutter'</span>;
                            </div>

                            <div className="ml-4 mt-2">
                                <span className="text-purple-400">int</span> <span className="text-blue-300">experience</span> = <span className="text-orange-300">2</span>;
                            </div>

                            <div className="ml-4 mt-2">
                                <span className="text-purple-400">List</span><span className="text-gray-400">&lt;</span><span className="text-purple-400">String</span><span className="text-gray-400">&gt;</span> <span className="text-blue-300">skills</span> = <span className="text-gray-400">[</span>
                            </div>

                            <div className="ml-8 mt-1">
                                <span className="text-green-300">'Firebase'</span>, <span className="text-green-300">'Node.js'</span>, <span className="text-green-300">'Rest API'</span>
                            </div>

                            <div className="ml-4 mt-1 text-gray-400">
                                ];
                            </div>

                            <div className="text-gray-400 mt-2">{`}`}</div>

                            <div className="mt-6 mb-2">
                                <div className="text-gray-500 uppercase text-[10px] tracking-widest font-bold mb-2">Currently Building</div>
                                <div className="bg-white/5 border border-white/5 rounded p-3 text-gray-300">
                                    Scaleable E-commerce Ecosystem
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        </section>
    );
};

export default Hero;
