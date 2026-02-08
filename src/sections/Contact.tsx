import { profile } from "../data/profile";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 max-w-7xl mx-auto mb-20 reveal-on-scroll">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-mono font-medium tracking-wide uppercase">
                    05 // Collaboration
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Let's build <span className="text-primary-500">together.</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    I'm currently looking for new opportunities and creative partnerships.
                    Whether you have a specific project in mind or just want to chat tech, reach out!
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Email Card */}
                <a
                    href={`mailto:${profile.contact.email}`}
                    className="p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-primary-500/30 transition-all duration-300 group text-center"
                >
                    <div className="w-12 h-12 mx-auto bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 text-primary-500 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 className="text-white font-bold mb-1">Email</h3>
                    <p className="text-sm text-gray-500 group-hover:text-primary-400 transition-colors">{profile.contact.email}</p>
                </a>

                {/* LinkedIn Card */}
                <a
                    href={profile.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-primary-500/30 transition-all duration-300 group text-center"
                >
                    <div className="w-12 h-12 mx-auto bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 text-primary-500 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </div>
                    <h3 className="text-white font-bold mb-1">LinkedIn</h3>
                    <p className="text-sm text-gray-500 group-hover:text-primary-400 transition-colors">/akash-maurya</p>
                </a>

                {/* Location Card */}
                <div className="p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-primary-500/30 transition-all duration-300 group text-center cursor-default">
                    <div className="w-12 h-12 mx-auto bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 text-primary-500 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <h3 className="text-white font-bold mb-1">Location</h3>
                    <p className="text-sm text-gray-500 group-hover:text-primary-400 transition-colors">Varanasi, Uttar Pradesh, India</p>
                </div>
            </div>

            <footer className="mt-24 pt-8 border-t border-white/5 text-center">
                <p className="text-gray-600 text-sm">
                    Designed & Built by <span className="text-white">Akash Maurya</span>
                    <br />
                    <span className="text-xs mt-2 block">&copy; {new Date().getFullYear()} Akash Maurya. All rights reserved.</span>
                </p>
            </footer>
        </section>
    );
};

export default Contact;
