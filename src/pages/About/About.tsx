import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, GraduationCap, Target, Briefcase } from 'lucide-react';
import Card from '../../components/Card/Card';

interface AboutProps {
    isSection?: boolean;
}

const About = ({ isSection = false }: AboutProps) => {
    const skills = [
        {
            icon: Layout,
            title: 'Frontend Development',
            desc: 'Building responsive, pixel-perfect user interfaces.',
            tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
        },
        {
            icon: Database,
            title: 'Backend Development',
            desc: 'Creating robust APIs and database architectures.',
            tech: ['Node.js', 'Java', 'PostgreSQL', 'MongoDB']
        },
        {
            icon: Terminal,
            title: 'DevOps & Tools',
            desc: 'Streamlining deployment and development workflows.',
            tech: ['Git', 'Docker', 'AWS', 'CI/CD']
        },
        {
            icon: Code2,
            title: 'Clean Code',
            desc: 'Writing maintainable, scalable, and efficient code.',
            tech: ['Design Patterns', 'Testing', 'Refactoring', 'Optimization']
        }
    ];

    const education = [
        {
            school: 'XYZ University',
            degree: 'Bachelor of Software Engineering',
            year: '2021 - 2025 (Expected)',
            desc: 'Focusing on distributed systems and web technologies. GPA: 3.2/4.0',
            icon: GraduationCap
        }
    ];

    const experience = [
        {
            company: 'Freelance',
            role: 'Full Stack Developer',
            year: '2023 - Present',
            desc: 'Developed custom web solutions for various clients using MERN stack.',
            icon: Briefcase
        }
    ];

    return (
        <div className={`${isSection ? 'py-20' : 'min-h-screen pt-24 pb-20'} relative overflow-hidden`}>
            {/* Background Elements - Only show if not a section */}
            {!isSection && (
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-accent/5 blur-[100px] rounded-full animate-blob" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full animate-blob animation-delay-2000" />
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-20"
                >
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Me</span>
                        </h1>
                        <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                            Passionate about technology and building solutions that make a difference.
                            I transform complex problems into elegant, user-friendly digital experiences.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <Card key={index} className="h-full group">
                                <div className="p-6 h-full flex flex-col">
                                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <skill.icon className="w-7 h-7 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">{skill.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.tech.map((t) => (
                                            <span key={t} className="text-xs font-medium text-accent-light bg-accent/5 px-2 py-1 rounded border border-accent/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Timeline Section */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Education */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-8">
                                <GraduationCap className="text-accent" size={28} />
                                <h2 className="text-2xl font-bold text-white">Education</h2>
                            </div>
                            <div className="relative border-l-2 border-white/10 ml-3 space-y-12">
                                {education.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="relative pl-8"
                                    >
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent" />
                                        <div className="space-y-2">
                                            <span className="text-sm font-mono text-accent">{item.year}</span>
                                            <h3 className="text-xl font-bold text-white">{item.school}</h3>
                                            <p className="text-white/80 font-medium">{item.degree}</p>
                                            <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-8">
                                <Briefcase className="text-accent" size={28} />
                                <h2 className="text-2xl font-bold text-white">Experience</h2>
                            </div>
                            <div className="relative border-l-2 border-white/10 ml-3 space-y-12">
                                {experience.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="relative pl-8"
                                    >
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent" />
                                        <div className="space-y-2">
                                            <span className="text-sm font-mono text-accent">{item.year}</span>
                                            <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                            <p className="text-white/80 font-medium">{item.company}</p>
                                            <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Goals */}
                    <Card className="p-8 bg-gradient-to-r from-accent/5 to-purple-500/5 border-accent/10">
                        <div className="flex flex-col md:flex-row items-center gap-8 p-4">
                            <div className="p-4 bg-accent/10 rounded-full">
                                <Target className="w-8 h-8 text-accent" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white mb-2">My Goal</h3>
                                <p className="text-text-secondary">
                                    To become a versatile Full-stack Developer who creates impactful solutions,
                                    contributes to open source, and constantly learns new technologies to stay ahead of the curve.
                                </p>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
