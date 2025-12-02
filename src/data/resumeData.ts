export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string[];
}

export interface Education {
    id: string;
    degree: string;
    school: string;
    period: string;
    description: string;
    gpa: string;
}

export interface SkillCategory {
    id: string;
    title: string;
    skills: string[];
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
}

export interface ResumeData {
    experience: Experience[];
    education: Education[];
    skills: SkillCategory[];
    certifications: Certification[];
}

export const initialResumeData: ResumeData = {
    experience: [
        {
            id: '1',
            role: 'Full Stack Developer',
            company: 'Freelance',
            period: '2023 - Present',
            description: [
                'Developed and deployed custom web applications for various clients using the MERN stack.',
                'Collaborated with clients to define requirements and deliver solutions that met their business needs.',
                'Implemented responsive designs and ensured cross-browser compatibility.'
            ]
        }
    ],
    education: [
        {
            id: '1',
            degree: 'Bachelor of Software Engineering',
            school: 'XYZ University',
            period: '2021 - 2025 (Expected)',
            description: 'Relevant Coursework: Data Structures & Algorithms, Web Development, Database Systems, Distributed Systems.',
            gpa: '3.2/4.0'
        }
    ],
    skills: [
        {
            id: '1',
            title: 'Frontend',
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'Redux']
        },
        {
            id: '2',
            title: 'Backend',
            skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Java', 'Spring Boot']
        },
        {
            id: '3',
            title: 'Tools & DevOps',
            skills: ['Git', 'Docker', 'AWS', 'Linux', 'VS Code', 'Figma']
        }
    ],
    certifications: [
        {
            id: '1',
            name: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services - 2024'
        },
        {
            id: '2',
            name: 'Meta Frontend Developer Professional Certificate',
            issuer: 'Coursera - 2023'
        }
    ]
};
