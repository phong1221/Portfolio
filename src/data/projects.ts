import marketImg from '../assets/market.png';
import examTimeImg from '../assets/exam-time.png';

const projects = [
    {
        id: 1,
        title: "Market Management",
        description: "A full-featured online shopping platform built with React and Node.js. Features include user authentication, product filtering, shopping cart management, and payment gateway integration.",
        tech: [
            "React",
            "PHP",
            "MySQL",
            "Bootstrap"
        ],
        github: "https://github.com/phong1221/Market_Management.git",
        image: marketImg
    },
    {
        id: 2,
        title: "English Exam Practice Website",
        description: "A collaborative task management tool designed for teams. Includes real-time updates, drag-and-drop task organization, and team progress tracking.",
        tech: [
            "React",
            "Java Spring boot",
            "PostgreSQL",
            "Tailwind"
        ],
        github: "https://github.com/phong1221/English-exam-practice-website.git",
        image: examTimeImg
    }
];

export default projects;
