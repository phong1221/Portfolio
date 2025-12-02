import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };



    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full animate-blob animation-delay-4000" />
            </div>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative z-10 pt-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            <span className="text-accent text-sm font-medium tracking-wide uppercase">Available for work</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
                            Building <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-accent-light">
                                Digital Dreams
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-light">
                            I'm <strong className="text-white font-semibold">Dang Quang Phong</strong>, a software engineer crafting pixel-perfect, robust, and accessible web experiences.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 justify-center pt-8">
                            <Link to="/projects" className="group relative px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-1 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    View My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
                                Contact Me
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative z-10">
                <About isSection />
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative z-10 bg-bg-secondary/30 backdrop-blur-sm">
                <Projects isSection />
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative z-10">
                <Contact isSection />
            </section>
        </div>
    );
};

export default Home;
