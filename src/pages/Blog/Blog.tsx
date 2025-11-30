import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import Card from '../../components/Card/Card';
import blogData from '../../data/blog.json';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = [
        'All',
        'Web & App Notes',
        'Stories / Nhật ký code',
    ];

    const filteredPosts = selectedCategory === 'All'
        ? blogData
        : blogData.filter(post => post.category === selectedCategory);

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
            >
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-mono font-bold text-gray-900 dark:text-white">
                        Blog & Notes 📝
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Chia sẻ kiến thức và những câu chuyện code dở khóc dở cười
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                    ? 'bg-pastel-green dark:bg-pastel-green-dark text-gray-900 dark:text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    layout
                >
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            layout
                        >
                            <Card>
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={16} />
                                            {post.date}
                                        </span>
                                        <span className="px-3 py-1 bg-pastel-beige dark:bg-gray-700 rounded-full text-xs font-medium">
                                            {post.category}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white hover:text-pastel-blue dark:hover:text-pastel-blue transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-300"
                                            >
                                                <Tag size={12} />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <motion.button
                                        className="text-pastel-blue dark:text-pastel-blue-dark font-medium hover:underline"
                                        whileHover={{ x: 5 }}
                                    >
                                        Đọc thêm →
                                    </motion.button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            Chưa có bài viết nào trong danh mục này 😢
                        </p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Blog;
