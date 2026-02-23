import { motion } from "framer-motion";
import { projects } from "../data/content";
import SectionWrapper from "../components/SectionWrapper";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
    return (
        <SectionWrapper id="projects" className="bg-dark/50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-blue-500/20 group hover:border-blue-500/50 transition-all"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{project.description}</p>
                                </div>
                                <div className="flex gap-2">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                                            title="View on GitHub"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.id === 3 && project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                                            title="Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
