import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
        { path: '/resume', label: 'Resume' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'py-4'
                : 'py-6'
                }`}
        >
            <div className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${scrolled ? 'px-4' : 'px-6'}`}>
                <div className={`
                    relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300
                    ${scrolled
                        ? 'bg-bg-secondary/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-blue-500/5'
                        : 'bg-transparent'
                    }
                `}>
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="text-2xl font-bold tracking-tighter group relative z-50"
                    >
                        <span className="text-white group-hover:text-accent transition-colors duration-300">DQP</span>
                        <span className="text-accent animate-pulse">.</span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group overflow-hidden ${isActive
                                        ? 'text-white bg-white/5'
                                        : 'text-text-secondary hover:text-white hover:bg-white/5'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="relative z-10">{item.label}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute inset-0 bg-white/5 rounded-lg -z-0"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-50 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Mobile Navigation Overlay */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 right-0 mt-2 p-2 bg-bg-secondary border border-white/10 rounded-2xl shadow-2xl overflow-hidden md:hidden"
                            >
                                <div className="space-y-1">
                                    {navItems.map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `block w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-300 ${isActive
                                                    ? 'bg-accent/10 text-accent'
                                                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                                                }`
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
