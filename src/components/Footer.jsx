import { personalInfo } from "../data/content";

const Footer = () => {
    return (
        <footer className="bg-black/40 py-8 text-center border-t border-white/5">
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
