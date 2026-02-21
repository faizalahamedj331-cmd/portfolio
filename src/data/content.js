import { Github, Linkedin, Mail, Code, Layout, Database, Server, Smartphone, Globe, Cloud, Terminal, Cpu, GitBranch, Shield } from "lucide-react";

export const personalInfo = {
    name: "Faizal Ahamed J",
    title: "Python Full Stack Developer",
    location: "Chennai, Tamil Nadu, India",
    email: "faizalahamedj331@gmail.com",
    linkedin: "https://www.linkedin.com/in/faizal-ahamed-j-a1a89a346",
    github: "https://github.com/faizalahamedj331-cmd",
    heroTagline: "Architecting scalable web solutions with Django, React, and robust REST APIs.",
    summary: "Results-oriented Python Full Stack Developer with expertise in designing and building scalable web applications using Django, React, and REST APIs. Proven track record of architecting high-performance backend systems, implementing secure role-based authentication, and optimizing database schemas for efficiency. Adept at translating complex business requirements into production-ready technical solutions.",
};

export const skills = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: Code },
            { name: "JavaScript (ES6+)", icon: Code },
            { name: "SQL", icon: Database },
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Django", icon: Server },
            { name: "REST Framework", icon: Cloud },
            { name: "MVC Arch", icon: Layout },
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "ReactJS", icon: Code },
            { name: "Bootstrap", icon: Layout },
        ]
    },
    {
        category: "Database",
        items: [
            { name: "MySQL", icon: Database },
            { name: "Optimization", icon: Terminal },
        ]
    },
    {
        category: "Tools & DevOps",
        items: [
            { name: "Git & GitHub", icon: GitBranch },
            { name: "Docker", icon: Server },
            { name: "CI/CD", icon: Cloud },
            { name: "Postman", icon: Globe },
        ]
    }
];

export const experience = [
    {
        id: 1,
        title: "Python Full Stack Developer Intern",
        company: "Besant Technologies",
        year: "Less than 1 year",
        description: "Architected and deployed an Enterprise Academic Workflow System using Django and React, reducing administrative workload by 40%. Engineered robust RESTful APIs with optimized endpoints to handle high-concurrency data requests. Implemented secure JWT-based authentication and granular Role-Based Access Control (RBAC).",
    }
];

export const projects = [
    {
        id: 1,
        title: "Student project and internship tracking platform",
        stack: ["Django", "React", "MySQL"],
        description: "A centralized platform for managing academic project lifecycles with automated workflows.",
        features: [
            "Automated submission portals & peer review workflows",
            "Secure JWT authentication & Role-Based Access Control",
            "Real-time dashboards using React & Chart.js",
            "Optimized Django ORM queries for high performance",
        ],
        github: "https://github.com/faizalahamedj331-cmd/projectsx2",
        live: "#",
    },
    {
        id: 2,
        title: "SmartCater – Catering Management System",
        stack: ["Django", "React", "REST API", "MySQL"],
        description: "Enterprise catering management solution for order processing and inventory tracking.",
        features: [
            "Multi-tenant architecture for vendor management",
            "Real-time order status updates & billing",
            "Lazy loading & state management for performance",
            "Comprehensive inventory tracking system",
        ],
        github: "https://github.com/faizalahamedj331-cmd/smart-cater",
        live: "#",
    },
    {
        id: 3,
        title: "Real-Time Chat Application",
        stack: ["Django Channels", "React", "WebSocket", "Redis"],
        description: "Full-stack real-time messaging application with chat rooms and online status tracking.",
        features: [
            "Real-time messaging using WebSockets",
            "Chat rooms and private messaging",
            "Online/offline status indicators",
            "Message persistence with MySQL",
        ],
        github: "https://github.com/faizalahamedj331-cmd/chat-app",
        live: "#",
    }
];

export const education = {
    degree: "B.E Computer Science Engineering",
    institution: "Indra Ganesan College of Engineering",
    year: "2022–2026",
    cgpa: "8.7 / 10",
};

export const certifications = [
    "Generative AI – Great Learning",
    "Full Stack Development – Esoft IT Solutions",
];
