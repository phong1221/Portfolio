import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, Code2, Edit2, Save, Plus, Trash2, X } from 'lucide-react';
import Card from '../../components/Card/Card';
import { initialResumeData, type ResumeData, type Experience, type Education, type SkillCategory, type Certification } from '../../data/resumeData';

const Resume = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState<ResumeData>(initialResumeData);

    // Load from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem('resumeData');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    // Save to localStorage whenever data changes
    useEffect(() => {
        localStorage.setItem('resumeData', JSON.stringify(data));
    }, [data]);

    const handleSave = () => {
        setIsEditing(false);
    };

    // --- CRUD Helpers ---

    const updateExperience = (id: string, field: keyof Experience, value: any) => {
        setData(prev => ({
            ...prev,
            experience: prev.experience.map(item => item.id === id ? { ...item, [field]: value } : item)
        }));
    };

    const addExperience = () => {
        const newExp: Experience = {
            id: Date.now().toString(),
            role: 'New Role',
            company: 'Company Name',
            period: 'Period',
            description: ['New responsibility']
        };
        setData(prev => ({ ...prev, experience: [...prev.experience, newExp] }));
    };

    const deleteExperience = (id: string) => {
        setData(prev => ({ ...prev, experience: prev.experience.filter(item => item.id !== id) }));
    };

    const updateEducation = (id: string, field: keyof Education, value: any) => {
        setData(prev => ({
            ...prev,
            education: prev.education.map(item => item.id === id ? { ...item, [field]: value } : item)
        }));
    };

    const addEducation = () => {
        const newEdu: Education = {
            id: Date.now().toString(),
            degree: 'Degree Name',
            school: 'School Name',
            period: 'Period',
            description: 'Description...',
            gpa: 'GPA'
        };
        setData(prev => ({ ...prev, education: [...prev.education, newEdu] }));
    };

    const deleteEducation = (id: string) => {
        setData(prev => ({ ...prev, education: prev.education.filter(item => item.id !== id) }));
    };

    const updateSkillCategory = (id: string, title: string) => {
        setData(prev => ({
            ...prev,
            skills: prev.skills.map(item => item.id === id ? { ...item, title } : item)
        }));
    };

    const updateSkillsList = (id: string, skillsString: string) => {
        const skillsArray = skillsString.split(',').map(s => s.trim()).filter(s => s);
        setData(prev => ({
            ...prev,
            skills: prev.skills.map(item => item.id === id ? { ...item, skills: skillsArray } : item)
        }));
    };

    const addSkillCategory = () => {
        const newCat: SkillCategory = {
            id: Date.now().toString(),
            title: 'New Category',
            skills: ['Skill 1', 'Skill 2']
        };
        setData(prev => ({ ...prev, skills: [...prev.skills, newCat] }));
    };

    const deleteSkillCategory = (id: string) => {
        setData(prev => ({ ...prev, skills: prev.skills.filter(item => item.id !== id) }));
    };

    const updateCertification = (id: string, field: keyof Certification, value: string) => {
        setData(prev => ({
            ...prev,
            certifications: prev.certifications.map(item => item.id === id ? { ...item, [field]: value } : item)
        }));
    };

    const addCertification = () => {
        const newCert: Certification = {
            id: Date.now().toString(),
            name: 'Certificate Name',
            issuer: 'Issuer'
        };
        setData(prev => ({ ...prev, certifications: [...prev.certifications, newCert] }));
    };

    const deleteCertification = (id: string) => {
        setData(prev => ({ ...prev, certifications: prev.certifications.filter(item => item.id !== id) }));
    };


    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full animate-blob" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Resume</h1>
                            <p className="text-text-secondary">My professional journey and qualifications.</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                                className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 ${isEditing ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                            >
                                {isEditing ? <Save size={20} /> : <Edit2 size={20} />}
                                {isEditing ? 'Save Changes' : 'Edit Resume'}
                            </button>
                            <a
                                href="/resume.pdf"
                                download
                                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1"
                            >
                                <Download size={20} />
                                Download PDF
                            </a>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-12">
                        {/* Experience */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-accent/10 rounded-lg">
                                        <Briefcase className="w-6 h-6 text-accent" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Experience</h2>
                                </div>
                                {isEditing && (
                                    <button onClick={addExperience} className="p-2 bg-accent/20 text-accent rounded-full hover:bg-accent/30 transition-colors">
                                        <Plus size={20} />
                                    </button>
                                )}
                            </div>

                            <div className="grid gap-6">
                                {data.experience.map((exp) => (
                                    <Card key={exp.id} className="p-6 md:p-8 relative group">
                                        {isEditing && (
                                            <button onClick={() => deleteExperience(exp.id)} className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-500/10 rounded-full transition-colors z-10">
                                                <Trash2 size={20} />
                                            </button>
                                        )}
                                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                                            <div className="flex-grow space-y-2">
                                                {isEditing ? (
                                                    <>
                                                        <input
                                                            value={exp.role}
                                                            onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                                                            className="w-full bg-white/5 border border-white/10 rounded px-3 py-1 text-xl font-bold text-white focus:border-accent outline-none"
                                                            placeholder="Role"
                                                        />
                                                        <input
                                                            value={exp.company}
                                                            onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                                            className="w-full bg-white/5 border border-white/10 rounded px-3 py-1 text-accent font-medium focus:border-accent outline-none"
                                                            placeholder="Company"
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                                        <p className="text-accent font-medium">{exp.company}</p>
                                                    </>
                                                )}
                                            </div>
                                            {isEditing ? (
                                                <input
                                                    value={exp.period}
                                                    onChange={(e) => updateExperience(exp.id, 'period', e.target.value)}
                                                    className="bg-white/5 border border-white/10 rounded px-3 py-1 text-sm font-mono text-text-muted focus:border-accent outline-none"
                                                    placeholder="Period"
                                                />
                                            ) : (
                                                <span className="text-sm font-mono text-text-muted bg-white/5 px-3 py-1 rounded-full">
                                                    {exp.period}
                                                </span>
                                            )}
                                        </div>
                                        {isEditing ? (
                                            <textarea
                                                value={exp.description.join('\n')}
                                                onChange={(e) => updateExperience(exp.id, 'description', e.target.value.split('\n'))}
                                                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-text-secondary focus:border-accent outline-none min-h-[100px]"
                                                placeholder="Description (one item per line)"
                                            />
                                        ) : (
                                            <ul className="list-disc list-inside space-y-2 text-text-secondary">
                                                {exp.description.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-accent/10 rounded-lg">
                                        <GraduationCap className="w-6 h-6 text-accent" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Education</h2>
                                </div>
                                {isEditing && (
                                    <button onClick={addEducation} className="p-2 bg-accent/20 text-accent rounded-full hover:bg-accent/30 transition-colors">
                                        <Plus size={20} />
                                    </button>
                                )}
                            </div>

                            <div className="grid gap-6">
                                {data.education.map((edu) => (
                                    <Card key={edu.id} className="p-6 md:p-8 relative group">
                                        {isEditing && (
                                            <button onClick={() => deleteEducation(edu.id)} className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-500/10 rounded-full transition-colors z-10">
                                                <Trash2 size={20} />
                                            </button>
                                        )}
                                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                                            <div className="flex-grow space-y-2">
                                                {isEditing ? (
                                                    <>
                                                        <input
                                                            value={edu.degree}
                                                            onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                                            className="w-full bg-white/5 border border-white/10 rounded px-3 py-1 text-xl font-bold text-white focus:border-accent outline-none"
                                                            placeholder="Degree"
                                                        />
                                                        <input
                                                            value={edu.school}
                                                            onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                                                            className="w-full bg-white/5 border border-white/10 rounded px-3 py-1 text-accent font-medium focus:border-accent outline-none"
                                                            placeholder="School"
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                                        <p className="text-accent font-medium">{edu.school}</p>
                                                    </>
                                                )}
                                            </div>
                                            {isEditing ? (
                                                <input
                                                    value={edu.period}
                                                    onChange={(e) => updateEducation(edu.id, 'period', e.target.value)}
                                                    className="bg-white/5 border border-white/10 rounded px-3 py-1 text-sm font-mono text-text-muted focus:border-accent outline-none"
                                                    placeholder="Period"
                                                />
                                            ) : (
                                                <span className="text-sm font-mono text-text-muted bg-white/5 px-3 py-1 rounded-full">
                                                    {edu.period}
                                                </span>
                                            )}
                                        </div>
                                        {isEditing ? (
                                            <>
                                                <textarea
                                                    value={edu.description}
                                                    onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                                                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-text-secondary focus:border-accent outline-none mb-2"
                                                    placeholder="Description"
                                                />
                                                <input
                                                    value={edu.gpa}
                                                    onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                                                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-1 text-white font-medium focus:border-accent outline-none"
                                                    placeholder="GPA"
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-text-secondary mb-4">{edu.description}</p>
                                                <p className="text-white font-medium">GPA: {edu.gpa}</p>
                                            </>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        </section>

                        {/* Skills */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-accent/10 rounded-lg">
                                        <Code2 className="w-6 h-6 text-accent" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
                                </div>
                                {isEditing && (
                                    <button onClick={addSkillCategory} className="p-2 bg-accent/20 text-accent rounded-full hover:bg-accent/30 transition-colors">
                                        <Plus size={20} />
                                    </button>
                                )}
                            </div>

                            <Card className="p-6 md:p-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {data.skills.map((category) => (
                                        <div key={category.id} className="relative group">
                                            {isEditing && (
                                                <button onClick={() => deleteSkillCategory(category.id)} className="absolute top-0 right-0 p-1 text-red-500 hover:bg-red-500/10 rounded-full transition-colors">
                                                    <X size={16} />
                                                </button>
                                            )}
                                            {isEditing ? (
                                                <input
                                                    value={category.title}
                                                    onChange={(e) => updateSkillCategory(category.id, e.target.value)}
                                                    className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-lg font-bold text-white focus:border-accent outline-none mb-4"
                                                    placeholder="Category Title"
                                                />
                                            ) : (
                                                <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
                                            )}

                                            {isEditing ? (
                                                <textarea
                                                    value={category.skills.join(', ')}
                                                    onChange={(e) => updateSkillsList(category.id, e.target.value)}
                                                    className="w-full bg-white/5 border border-white/10 rounded px-2 py-2 text-text-secondary focus:border-accent outline-none min-h-[80px]"
                                                    placeholder="Skills (comma separated)"
                                                />
                                            ) : (
                                                <div className="flex flex-wrap gap-2">
                                                    {category.skills.map(skill => (
                                                        <span key={skill} className="px-3 py-1 bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white rounded-full text-sm transition-colors cursor-default">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </section>

                        {/* Certifications */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-accent/10 rounded-lg">
                                        <Award className="w-6 h-6 text-accent" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Certifications</h2>
                                </div>
                                {isEditing && (
                                    <button onClick={addCertification} className="p-2 bg-accent/20 text-accent rounded-full hover:bg-accent/30 transition-colors">
                                        <Plus size={20} />
                                    </button>
                                )}
                            </div>

                            <Card className="p-6 md:p-8">
                                <ul className="space-y-4">
                                    {data.certifications.map((cert) => (
                                        <li key={cert.id} className="flex items-start gap-4 relative group">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                                            <div className="flex-grow">
                                                {isEditing ? (
                                                    <div className="space-y-2">
                                                        <input
                                                            value={cert.name}
                                                            onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                                                            className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-white font-medium focus:border-accent outline-none"
                                                            placeholder="Certificate Name"
                                                        />
                                                        <input
                                                            value={cert.issuer}
                                                            onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                                                            className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm text-text-muted focus:border-accent outline-none"
                                                            placeholder="Issuer"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <h4 className="text-white font-medium">{cert.name}</h4>
                                                        <p className="text-sm text-text-muted">{cert.issuer}</p>
                                                    </div>
                                                )}
                                            </div>
                                            {isEditing && (
                                                <button onClick={() => deleteCertification(cert.id)} className="p-1 text-red-500 hover:bg-red-500/10 rounded-full transition-colors">
                                                    <Trash2 size={16} />
                                                </button>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;

