import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/content";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-dark/80 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    {personalInfo.name}
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-lg border-b border-white/10 p-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-blue-400 text-lg font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex space-x-6 mt-4">
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Github /></a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Linkedin /></a>
                        <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-white"><Mail /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
