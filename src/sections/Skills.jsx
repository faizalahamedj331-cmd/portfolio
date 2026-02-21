import { motion } from "framer-motion";
import { skills } from "../data/content";
import SectionWrapper from "../components/SectionWrapper";

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-dark">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-gray-200 border-b border-white/10 pb-2">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg text-sm text-gray-300 group-hover:bg-white/10 transition-colors"
                                    >
                                        <skill.icon size={16} className="text-blue-400" />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
