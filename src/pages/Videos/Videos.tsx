import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

const Videos = () => {
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
                        Short Videos 🎥
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        TikTok & YouTube Shorts về lập trình (coming soon!)
                    </p>
                </div>

                {/* Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="aspect-[9/16] bg-gradient-to-br from-pastel-blue via-pastel-green to-pastel-beige dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Video size={48} className="text-gray-400 dark:text-gray-500 mb-4" />
                            <p className="text-gray-500 dark:text-gray-400 font-mono text-sm">
                                Coming Soon
                            </p>
                            <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
                                Video #{i}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Info Section */}
                <div className="bg-pastel-beige dark:bg-gray-800 rounded-lg p-8 text-center border border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-4">
                        Đang chuẩn bị nội dung 🚧
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Mình đang có kế hoạch làm những video ngắn về coding tips, debugging stories,
                        và chia sẻ kinh nghiệm học lập trình. Hãy quay lại sau nhé!
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <a
                            href="https://tiktok.com/@dangquangphong"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                        >
                            Follow TikTok
                        </a>
                        <a
                            href="https://youtube.com/@dangquangphong"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                        >
                            Subscribe YouTube
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Videos;
