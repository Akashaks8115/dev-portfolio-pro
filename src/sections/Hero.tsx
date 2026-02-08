import { profile } from "../data/profile";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-4xl text-center space-y-8">
                <div className="space-y-4 animate-fade-in">
                    <h2 className="text-xl md:text-2xl text-primary-500 font-medium tracking-wide">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                        {profile.name}
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-gray-400 font-light">
                        {profile.role}
                    </h2>
                </div>

                <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed animate-slide-up animation-delay-200">
                    {profile.summary}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-slide-up animation-delay-400">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-medium transition-all hover:scale-105 backdrop-blur-sm"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
