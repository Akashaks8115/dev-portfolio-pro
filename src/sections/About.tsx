

const About = () => {
    return (
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-16">
                <span className="text-primary-500 font-mono text-xl font-medium">01</span>
                <span className="text-primary-500/50 font-mono text-xl">//</span>
                <h2 className="text-3xl font-bold text-white tracking-wide uppercase">Background</h2>
                <div className="h-px bg-white/10 flex-1 ml-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        Solving digital puzzles <br />
                        through <span className="text-primary-500">code.</span>
                    </h3>

                    <div className="space-y-4 text-gray-400 leading-relaxed">
                        <p>
                            I am a results-driven Mobile Application Developer with over 2 years of experience
                            in building high-performance cross-platform applications using Flutter and Dart.
                            My expertise lies in creating seamless user experiences for both Android and iOS platforms.
                        </p>
                        <p>
                            My approach combines <strong className="text-white">Clean Architecture</strong> with pixel-perfect design sensibilities.
                            I believe that a mobile app should not only work flawlessly but also delight the user at every interaction.
                        </p>
                        <p>
                            Whether it's complex state management with <strong className="text-white">Provider</strong> or architecting a real-time backend with <strong className="text-white">Firebase</strong>,
                            I thrive on technical challenges that push the boundaries of what's possible on mobile.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-6 border-t border-white/5">
                        <div>
                            <span className="block text-3xl font-bold text-white">2+</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Years Exp.</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-white">10+</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Projects Done</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-white">VNS</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Location</span>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative group perspective-1000">
                    <div className="absolute inset-0 bg-primary-500 rounded-2xl rotate-3 group-hover:rotate-1 transition-transform duration-300 opacity-20" />
                    <div className="relative rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2671&auto=format&fit=crop"
                            alt="Background"
                            className="w-full h-full object-cover aspect-square"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
