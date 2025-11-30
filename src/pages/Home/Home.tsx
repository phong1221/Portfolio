import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Globe } from 'lucide-react';

const Home = () => {
    const skills = [
        { name: 'HTML & CSS', icon: Globe, color: 'text-orange-500' },
        { name: 'JavaScript', icon: Code2, color: 'text-yellow-500' },
        { name: 'React & Java', icon: Code2, color: 'text-blue-500' },
        { name: 'Databases', icon: Database, color: 'text-green-500' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-12"
            >
                {/* Hero Section */}
                <motion.div variants={itemVariants} className="text-center space-y-6">
                    <div className="flex justify-center mb-6">
                        <motion.div
                            className="w-40 h-40 rounded-full bg-gradient-to-br from-pastel-blue to-pastel-green flex items-center justify-center text-6xl"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            👨‍💻
                        </motion.div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-mono font-bold text-gray-900 dark:text-white">
                        Xin chào! Mình là{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-blue to-pastel-green">
                            Đặng Quang Phong
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-sans max-w-2xl mx-auto">
                        Sinh viên năm 4 ngành <strong>Kỹ thuật phần mềm</strong>
                    </p>

                    <div className="bg-pastel-beige dark:bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto border-2 border-dashed border-gray-300 dark:border-gray-600">
                        <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                            "Hơi lười, lâu lâu mất động lực... nhưng rất tò mò về công nghệ Web và App! 🚀"
                        </p>
                    </div>
                </motion.div>

                {/* About Section */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <h2 className="text-3xl font-mono font-bold text-gray-900 dark:text-white">
                        Về mình
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Mình là một sinh viên năm cuối đang học về phát triển Web và App.
                            Mình thích khám phá những công nghệ mới, tự làm các project nhỏ,
                            và học hỏi từ những sai lầm (nhiều lắm 😅).
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Dù chưa có kinh nghiệm thực tế nhiều, nhưng mình rất chăm chỉ tự học
                            và luôn cố gắng cải thiện kỹ năng lập trình mỗi ngày.
                        </p>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div variants={itemVariants} className="space-y-6">
                    <h2 className="text-3xl font-mono font-bold text-gray-900 dark:text-white">
                        Kỹ năng
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 text-center"
                                whileHover={{ y: -8, scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <skill.icon className={`w-12 h-12 mx-auto mb-3 ${skill.color}`} />
                                <h3 className="font-mono font-semibold text-gray-900 dark:text-white">
                                    {skill.name}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <h2 className="text-3xl font-mono font-bold text-gray-900 dark:text-white">
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {['HTML', 'CSS', 'JavaScript', 'Java', 'ReactJS', 'MySQL', 'PostgreSQL', 'SQL Server'].map((tech) => (
                            <motion.span
                                key={tech}
                                className="px-4 py-2 bg-pastel-blue dark:bg-pastel-blue-dark rounded-full text-sm font-mono font-medium text-gray-800 dark:text-gray-200"
                                whileHover={{ scale: 1.1, y: -3 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
