import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, Github, Facebook } from 'lucide-react';
import Card from '../../components/Card/Card';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/dangquangphong',
            color: 'hover:bg-gray-900 dark:hover:bg-gray-700',
        },
        {
            name: 'Facebook',
            icon: Facebook,
            url: 'https://facebook.com/dangquangphong',
            color: 'hover:bg-blue-600',
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:dangquangphong@example.com',
            color: 'hover:bg-red-500',
        },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
            >
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-mono font-bold text-gray-900 dark:text-white">
                        Liên hệ 📬
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Hãy liên hệ với mình nhé! Mình sẽ trả lời sớm nhất có thể
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <Card hover={false}>
                        <div className="p-6">
                            <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-6">
                                Gửi tin nhắn
                            </h2>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-pastel-green dark:bg-green-900 text-gray-900 dark:text-green-100 p-6 rounded-lg text-center"
                                >
                                    <p className="text-lg font-semibold">✓ Đã gửi thành công!</p>
                                    <p className="text-sm mt-2">Cảm ơn bạn đã liên hệ 😊</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <div className="flex items-center gap-2">
                                                <User size={16} />
                                                Tên của bạn
                                            </div>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pastel-blue dark:focus:ring-pastel-blue-dark focus:border-transparent transition-all"
                                            placeholder="Nguyễn Văn A"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <div className="flex items-center gap-2">
                                                <Mail size={16} />
                                                Email
                                            </div>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pastel-blue dark:focus:ring-pastel-blue-dark focus:border-transparent transition-all"
                                            placeholder="email@example.com"
                                        />
                                    </div>

                                    {/* Message Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <div className="flex items-center gap-2">
                                                <MessageSquare size={16} />
                                                Lời nhắn
                                            </div>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pastel-blue dark:focus:ring-pastel-blue-dark focus:border-transparent transition-all resize-none"
                                            placeholder="Lời nhắn của bạn..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pastel-blue to-pastel-green text-gray-900 font-semibold rounded-lg hover:shadow-lg transition-shadow"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Send size={18} />
                                        Gửi tin nhắn
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </Card>

                    {/* Social Links & Info */}
                    <div className="space-y-6">
                        <Card hover={false}>
                            <div className="p-6">
                                <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-4">
                                    Kết nối với mình
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    Hoặc bạn có thể liên hệ mình qua các kênh sau:
                                </p>

                                <div className="space-y-3">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 hover:text-white transition-colors ${social.color}`}
                                            whileHover={{ x: 5 }}
                                        >
                                            <social.icon size={24} />
                                            <span className="font-medium">{social.name}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        <Card hover={false}>
                            <div className="p-6 bg-gradient-to-br from-pastel-beige to-pastel-blue dark:from-gray-800 dark:to-gray-700">
                                <h3 className="text-xl font-mono font-bold text-gray-900 dark:text-white mb-3">
                                    💡 Fun Fact
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Mình thường check email vào buổi tối sau khi code xong những task trong ngày.
                                    Nếu chưa reply ngay thì chắc là đang debug bug dở khóc dở cười 😅
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
