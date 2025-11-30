import { Github, Facebook, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/dangquangphong',
            color: 'hover:text-gray-900 dark:hover:text-white',
        },
        {
            name: 'Facebook',
            icon: Facebook,
            url: 'https://facebook.com',
            color: 'hover:text-blue-600',
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:dangquangphong@example.com',
            color: 'hover:text-red-500',
        },
    ];

    return (
        <footer className="mt-20 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        <p className="font-mono">
                            © 2024 Đặng Quang Phong. Made with ❤️ and ☕
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-600 dark:text-gray-400 transition-colors ${social.color}`}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.name}
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Fun tagline */}
                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-500 font-sans italic">
                        "Hơi lười, nhưng mê vọc công nghệ 🚀"
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
