import { motion } from 'framer-motion';
import { GraduationCap, Code, Database, Award, Target } from 'lucide-react';
import Card from '../../components/Card/Card';

const Resume = () => {
    const education = {
        school: 'Đại học XYZ',
        major: 'Kỹ thuật phần mềm',
        year: '2021 - 2025 (Dự kiến)',
        gpa: '3.2/4.0',
    };

    const programmingSkills = [
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'React.js', level: 70 },
        { name: 'Java', level: 65 },
    ];

    const databaseSkills = [
        { name: 'MySQL', level: 70 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'SQL Server', level: 60 },
    ];

    const achievements = [
        'Hoàn thành 4 project cá nhân full-stack',
        'Tự học React và Node.js',
        'Đạt điểm A môn Phát triển ứng dụng Web',
        'Tham gia Hackathon sinh viên 2024',
    ];

    const goals = [
        'Frontend Developer',
        'Full-stack Developer',
        'Mobile App Developer',
    ];

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
                        Kinh nghiệm & Kỹ năng 📄
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Hành trình học tập và phát triển của mình
                    </p>
                </div>

                {/* Education */}
                <Card>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <GraduationCap className="w-8 h-8 text-pastel-blue" />
                            <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                                Học vấn
                            </h2>
                        </div>
                        <div className="pl-11 space-y-2">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                {education.school}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Chuyên ngành: <strong>{education.major}</strong>
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                Thời gian: {education.year}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                GPA: <strong>{education.gpa}</strong>
                            </p>
                        </div>
                    </div>
                </Card>

                {/* Programming Skills */}
                <Card>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <Code className="w-8 h-8 text-pastel-green" />
                            <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                                Kỹ năng lập trình
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {programmingSkills.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                            {skill.name}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-pastel-blue to-pastel-green"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Database Skills */}
                <Card>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <Database className="w-8 h-8 text-pastel-beige-dark" />
                            <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                                Kỹ năng Database
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {databaseSkills.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                            {skill.name}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Achievements */}
                    <Card hover={false}>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <Award className="w-8 h-8 text-yellow-500" />
                                <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                                    Thành tựu
                                </h2>
                            </div>
                            <ul className="space-y-3">
                                {achievements.map((achievement, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="text-pastel-green text-lg">✓</span>
                                        <span>{achievement}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </Card>

                    {/* Career Goals */}
                    <Card hover={false}>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <Target className="w-8 h-8 text-red-500" />
                                <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                                    Mục tiêu nghề nghiệp
                                </h2>
                            </div>
                            <ul className="space-y-3">
                                {goals.map((goal, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.4 }}
                                    >
                                        <span className="text-2xl">🎯</span>
                                        <span className="font-medium">{goal}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
