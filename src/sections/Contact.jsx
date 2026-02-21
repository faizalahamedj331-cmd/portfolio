import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { personalInfo } from "../data/content";
import SectionWrapper from "../components/SectionWrapper";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Check if environment variables are set
        const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            toast.error("EmailJS service not configured. Please check .env file.");
            setLoading(false);
            return;
        }

        emailjs
            .send(
                serviceId,
                templateId,
                {
                    from_name: form.name,
                    to_name: personalInfo.name,
                    from_email: form.email,
                    to_email: personalInfo.email,
                    message: form.message,
                },
                publicKey
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("Message sent successfully! I'll get back to you soon.", {
                        style: {
                            background: '#333',
                            color: '#fff',
                        },
                        iconTheme: {
                            primary: '#3b82f6',
                            secondary: '#FFFAEE',
                        },
                    });
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error("EmailJS Error:", error);
                    console.log("Service ID:", serviceId);
                    console.log("Template ID:", templateId);
                    console.log("Public Key:", publicKey);
                    toast.error(`Failed to send message: ${error.text || "Unknown error"}`);
                }
            );
    };

    return (
        <SectionWrapper id="contact" className="bg-dark text-white relative">
            <Toaster position="bottom-right" reverseOrder={false} />
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Get In Touch
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                                    <Mail size={20} />
                                </div>
                                {personalInfo.email}
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                                    <Linkedin size={20} />
                                </div>
                                LinkedIn Profile
                            </a>
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                                    <Github size={20} />
                                </div>
                                GitHub Profile
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                placeholder="Your message..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    Sending... <Loader2 className="animate-spin" size={18} />
                                </>
                            ) : (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
