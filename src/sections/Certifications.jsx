import { motion } from "framer-motion";
import { certifications } from "../data/content";
import SectionWrapper from "../components/SectionWrapper";
import { Badge, CheckCircle } from "lucide-react";

const Certifications = () => {
    return (
        <SectionWrapper id="certifications" className="bg-dark">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Certifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <Badge className="text-white" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-2">
                                            {cert}
                                        </h3>
                                        <div className="flex items-center gap-2 text-green-400 text-sm">
                                            <CheckCircle size={16} />
                                            <span>Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional certs placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-400">
                            More certifications coming soon. Check my{" "}
                            <a 
                                href="https://www.linkedin.com/in/faizal-ahamed-j-a1a89a346" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline"
                            >
                                LinkedIn
                            </a>{" "}
                            for latest updates.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
