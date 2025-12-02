import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-bg-secondary border-t border-white/5 py-12 mt-auto relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">DQP<span className="text-accent">.</span></h3>
                        <p className="text-text-secondary text-sm">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/phong1221"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-accent/10 text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-accent/10 text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:quangphong4321@gmail.com"
                            className="p-2 rounded-full bg-white/5 hover:bg-accent/10 text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()} Dang Quang Phong. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                        Back to Top
                        <span className="p-1 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
