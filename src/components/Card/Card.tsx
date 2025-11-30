import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
    return (
        <motion.div
            className={`
        bg-white dark:bg-gray-800 
        rounded-lg shadow-md 
        border border-gray-200 dark:border-gray-700
        overflow-hidden
        ${hover ? 'hover:shadow-xl' : ''}
        ${className}
      `}
            whileHover={hover ? { y: -5, scale: 1.02 } : {}}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
