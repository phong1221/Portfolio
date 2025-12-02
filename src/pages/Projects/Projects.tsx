import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Code2 } from 'lucide-react';
import projectsData from '../../data/projects';
import Card from '../../components/Card/Card';

interface ProjectsProps {
    isSection?: boolean;
}

const Projects = ({ isSection = false }: ProjectsProps) => {
    return (
        <div className={`${isSection ? 'py-20' : 'min-h-screen pt-24 pb-20'} relative overflow-hidden`}>
            {/* Background Elements */}
            {!isSection && (
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 blur-[100px] rounded-full animate-blob" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full animate-blob animation-delay-4000" />
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Projects</span>
                        </h1>
                        <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                            A collection of my work, ranging from web applications to system tools.
                            Each project represents a unique challenge and learning opportunity.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projectsData.map((project, index) => (
                            <Card key={project.id} className="h-full group">
                                <div className="flex flex-col h-full">
                                    {/* Project Image/Preview */}
                                    <div className="relative h-64 overflow-hidden border-b border-white/5">
                                        <div className="absolute inset-0 bg-gradient-to-br from-bg-tertiary to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                            />
                                        </div>

                                        {/* Overlay Actions */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform duration-300"
                                                title="View Source Code"
                                            >
                                                <Github size={24} />
                                            </a>
                                            <a
                                                href="#"
                                                className="p-3 bg-accent text-white rounded-full hover:scale-110 transition-transform duration-300"
                                                title="Live Demo"
                                            >
                                                <ExternalLink size={24} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="p-8 flex-grow flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                                {project.title}
                                            </h3>
                                            <Code2 className="text-text-muted group-hover:text-accent transition-colors" size={24} />
                                        </div>

                                        <p className="text-text-secondary mb-6 line-clamp-3 leading-relaxed flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="space-y-6">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="px-3 py-1 text-xs font-medium text-text-secondary bg-white/5 rounded-full border border-white/5 group-hover:border-accent/20 group-hover:bg-accent/5 transition-colors">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors group/link"
                                                >
                                                    <Github size={16} />
                                                    <span>Source Code</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors group/link"
                                                >
                                                    <span>Live Demo</span>
                                                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
