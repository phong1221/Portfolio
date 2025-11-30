import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Card from '../../components/Card/Card';
import projectsData from '../../data/projects.json';

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
            >
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-mono font-bold text-gray-900 dark:text-white">
                        Dự án của mình 💻
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Những project mình đã làm để học hỏi và thử nghiệm
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                            <Card>
                                <div className="aspect-video bg-gradient-to-br from-pastel-blue via-pastel-green to-pastel-beige dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 flex items-center justify-center text-6xl">
                                    {project.id === 1 ? '🛒' : project.id === 2 ? '✅' : project.id === 3 ? '🌤️' : '📝'}
                                </div>

                                <div className="p-6 space-y-4">
                                    <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                                        {project.title}
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-300">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-pastel-beige dark:bg-gray-700 rounded-full text-xs font-mono font-medium text-gray-800 dark:text-gray-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-2">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Github size={18} />
                                            View on GitHub
                                        </motion.a>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
