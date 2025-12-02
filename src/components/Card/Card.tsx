import { type ReactNode } from 'react';
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
                glass-card
                rounded-2xl
                overflow-hidden
                p-1
                ${className}
            `}
            whileHover={hover ? { y: -5 } : {}}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <div className="bg-bg-tertiary/40 backdrop-blur-sm rounded-xl h-full w-full overflow-hidden">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
