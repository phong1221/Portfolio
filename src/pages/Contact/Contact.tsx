import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, Github, Linkedin, CheckCircle, MapPin } from 'lucide-react';
import Card from '../../components/Card/Card';

interface ContactProps {
    isSection?: boolean;
}

const Contact = ({ isSection = false }: ContactProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitted(true);
        setIsSubmitting(false);

        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={`${isSection ? 'py-20' : 'min-h-screen pt-24 pb-20'} relative overflow-hidden`}>
            {/* Background Elements */}
            {!isSection && (
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-accent/5 blur-[100px] rounded-full animate-blob" />
                    <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full animate-blob animation-delay-2000" />
                </div>
            )}

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-5 gap-12"
                >
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Connect</span>
                            </h1>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: Mail, label: 'Email', value: 'quangphong4321@gmail.com', href: 'mailto:quangphong4321@gmail.com' },
                                { icon: Github, label: 'GitHub', value: 'phong1221', href: 'https://github.com/phong1221' },
                                { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: '#' },
                                { icon: MapPin, label: 'Location', value: 'Ho Chi Minh City, Vietnam', href: '#' }
                            ].map((item, index) => (
                                <Card key={index} className="group hover:border-accent/30">
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4"
                                    >
                                        <div className="p-3 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                            <item.icon className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-text-muted font-medium">{item.label}</p>
                                            <p className="text-white font-medium group-hover:text-accent transition-colors">{item.value}</p>
                                        </div>
                                    </a>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                        <Card className="h-full">
                            <div className="p-8 md:p-10 h-full">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                        <p className="text-text-secondary max-w-xs">
                                            Thanks for reaching out. I'll get back to you as soon as possible.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-text-secondary ml-1">Name</label>
                                                <div className="relative group">
                                                    <User className="absolute left-4 top-3.5 w-5 h-5 text-text-muted group-focus-within:text-accent transition-colors" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full bg-bg-primary/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-text-secondary ml-1">Email</label>
                                                <div className="relative group">
                                                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-text-muted group-focus-within:text-accent transition-colors" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full bg-bg-primary/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-text-secondary ml-1">Message</label>
                                            <div className="relative group">
                                                <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-text-muted group-focus-within:text-accent transition-colors" />
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={6}
                                                    className="w-full bg-bg-primary/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all resize-none"
                                                    placeholder="Tell me about your project..."
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-70 disabled:cursor-not-allowed group"
                                        >
                                            {isSubmitting ? (
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
