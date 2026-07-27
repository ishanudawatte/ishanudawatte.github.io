import { ArrowUpRight } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";


const projects = [
    {
        title: "AquaSense - IoT-Based Smart Water Management & Leak Detection System",
        description: "A full-stack IoT water management platform that enables real-time monitoring of household water consumption, zone-level leak detection, automated valve control, and usage analytics. Built using Flutter, FastAPI, PostgreSQL (Supabase), MQTT, and ESP32 devices, the system processes live sensor data through a cloud-hosted architecture to provide intelligent monitoring, alerts, and water conservation insights.",
        image: "/projects/aquasense.png",
        tags: ["Python", "Flutter", "FastAPI", "Supabase", "C++", "HiveMQ Cloud", "PostgreSQL", "ESP32", "YF-S201 Water Flow Sensor", "Solenoid Valve", "Firebase Hosting", "Render", "GitHub"],
        link: "https://aquasense-sdgp.web.app/",
        github: "https://github.com/Ishan101-hub/sdgp-se24-aquasense-mobile",
    },
    {
        title: "Directed Graph Acyclicity Checker - Graph Algorithms & Cycle Detection Engine",
        description: "A Java-based graph analysis tool designed to determine whether a directed graph is acyclic (DAG) or contains cycles using two classical graph algorithms: sink elimination and iterative depth-first search (DFS). The application parses large graph datasets into an optimized adjacency-list structure, performs linear-time acyclicity verification in O(V + E) complexity, and identifies concrete cycle paths using three-colour DFS traversal with cycle reconstruction. Built with performance-focused data structures and benchmarked against large-scale graph inputs to validate algorithmic efficiency and scalability.",
        image: "/projects/cycle.png",
        tags: ["Java", "Algorithms", "Sink Elimination", "DFS", "Graphs Theory", "Git"],
        link: "https://github.com/Ishan101-hub/directed-graph-acyclicity-checker",
        github: "https://github.com/Ishan101-hub/directed-graph-acyclicity-checker",
    },
    {
        title: "Smart Home E-Commerce Platform",
        description: "A full-stack e-commerce web application developed for browsing, purchasing, and managing smart home products across security, energy, and automation categories. Built using PHP, MySQL, HTML, CSS, and session-based authentication, the platform features a dynamic product catalogue, product detail pages, role-based user access, and a shopping basket system with real-time subtotal and total calculations. The application integrates database-driven inventory management, user authentication workflows, and session persistence to deliver a complete online retail experience.",
        image: "/projects/homteq.png",
        tags: ["PHP", "MySQL", "HTML", "CSS", "XAMPP", "Git"],
        link: "https://github.com/Ishan101-hub/homteq-smart-home-ecommerce",
        github: "https://github.com/Ishan101-hub/homteq-smart-home-ecommerce",
    },
    {
        title: "AquaSense Product Showcase Platform",
        description: "A responsive product showcase website developed to present the AquaSense smart water management ecosystem, highlighting its IoT infrastructure, real-time monitoring capabilities, leakage detection features, analytics dashboard, and sustainability impact. Built using HTML, CSS, JavaScript, Node.js, and Express, the platform combines interactive user experiences, animated content sections, team showcases, product demonstrations, and integrated feedback collection to communicate the project's technical capabilities and vision to stakeholders, users, and potential partners.",
        image: "/projects/landing.png",
        tags: ["HTML", "CSS", "Node.js", "Express.js", "JavaScript", "Bootstrap", "Resend API", "Render", "Git"],
        link: "https://www.aquasense.lk/",
        github: "https://github.com/Ishan101-hub/sdgp-se-24-aqua-sense--landing-page",
    },
    {
        title: "Todo App - Full-Stack Task Management Application",
        description: "A full-stack CRUD web application developed using Node.js, Express.js, MongoDB, and EJS templating, enabling users to create, manage, update, and delete tasks through a clean and intuitive interface. The application follows MVC-inspired architecture patterns, integrates MongoDB Atlas for persistent cloud-based storage, and implements asynchronous database operations using Mongoose and async/await workflows to provide efficient task management and data handling.",
        image: "/projects/todo.png",
        tags: ["Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "EJS", "CSS", "Git"],
        link: "https://github.com/Ishan101-hub/todo-app-full-stack-task-management-application",
        github: "https://github.com/Ishan101-hub/todo-app-full-stack-task-management-application",
    },
    {
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio platform built with React, Vite, and Tailwind CSS to showcase software engineering projects, technical skills, and academic achievements through an immersive user experience. The application features custom glassmorphism interfaces, animated UI components, dynamic project galleries, interactive education timelines, and an EmailJS-powered contact system, combining modern frontend engineering practices with performance-focused design and responsive user experiences.",
        image: "/projects/portfolio.png",
        tags: ["React", "Vite", "Tailwind Css", "EmailJs", "GitHub Pages"],
        link: "https://ishan101-hub.github.io/",
        github: "https://github.com/Ishan101-hub/DEV-PERSONAL-PORTFOLIO",
    },
    {
        title: "University Enrollment System",
        description: "A Java-based university enrollment management system designed to manage students, lecturers, and course coordinators through both a console interface and an interactive Swing GUI. Built using core object-oriented programming principles including inheritance, abstraction, encapsulation, and polymorphism, the application supports enrolment management, advanced searching and sorting, statistics generation, data validation, and graphical data presentation. The system incorporates Maven-based project management and JUnit testing to ensure maintainability, reliability, and scalability.",
        image: "/projects/unienrollment.jpg",
        tags: ["Java", "Java Swing", "Apache Maven", "JUnit", "IntelliJ IDEA", "Git"],
        link: "https://github.com/Ishan101-hub/university-enrollment-system",
        github: "https://github.com/Ishan101-hub/university-enrollment-system",
    },
    {
        title: "SDG 14: Life Below Water - Responsive Awareness & Information Platform",
        description: "A multi-page responsive website developed to promote awareness of UN Sustainable Development Goal 14: Life Below Water, focusing on marine conservation, biodiversity protection, and sustainable ocean resource management. Built using HTML5, CSS3, SVG, and responsive design principles, the platform features interactive content navigation, data visualisation, volunteer programme showcases, feedback systems, multimedia integration, and accessibility-focused layouts, delivering an engaging educational experience across desktop and mobile devices.",
        image: "/projects/life_below_water.png",
        tags: ["HTML", "CSS", "JavaScript", "Git"],
        link: "https://github.com/Ishan101-hub/sdg14-life-below-water",
        github: "https://github.com/Ishan101-hub/sdg14-life-below-water",
    },
    {
        title: "Traffic Flow Data Analysis - Data Processing & Visualization System",
        description: "A data-driven traffic analysis system developed using Python, CSV processing, and Tkinter, designed to analyse traffic survey datasets and generate statistical insights from vehicle movement patterns. The application implements robust input validation, file handling, multi-dataset processing, automated report generation, and graphical data visualization, producing sixteen traffic metrics alongside interactive hourly traffic histograms for comparative junction analysis.",
        image: "/projects/histrogram.png",
        tags: ["Python", "Tkinter", "Git", "Histrogram"],
        link: "https://github.com/Ishan101-hub/traffic-flow-data-analysis",
        github: "https://github.com/Ishan101-hub/traffic-flow-data-analysis",
    },
    

]
const DEFAULT_VISIBLE = 2;

export const Projects = () => {
    const [showAll, setShowAll] = useState(false);
 
    const visibleProjects = showAll ? projects : projects.slice(0, DEFAULT_VISIBLE);
    const hasMore = projects.length > DEFAULT_VISIBLE;

    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
             <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Featured Work
                </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that 
                        <span className="font-serif italic font-normal text-white"> make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A collection of projects that showcase my journey in software engineering, from full-stack web applications and IoT systems to algorithms, data analysis, and cloud-based solutions.
                    </p>                
             </div>

             {/* Projects Grid */}
             <div className="grid md:grid-cols-2 gap-8">
                {visibleProjects.map((project, idx) => (
                    <div key={idx} 
                    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{animationDelay: `${(idx + 1)*100}ms`}}>
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                            />
                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                                <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <FaGithub className="w-5 h-5"/>
                                                                     
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary
                                group-hover:translate-x-1
                                group-hover:-translate-y-1 transition-all"/>
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span 
                                    key={tagIdx}
                                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                        {tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
             </div>

             {/* View All / Collapse CTA */}
                {hasMore && (
                    <div className="text-center mt-12 animate-fade-in animation-delay-500">
                        <AnimatedBorderButton onClick={() => setShowAll((prev) => !prev)}>
                            {showAll ? "Show Less" : "View All Projects"}
                            <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}/>
                        </AnimatedBorderButton>
                    </div>
)}
 
                {/* Always show the button even when no more projects (in case array has exactly 4) */}
                {!hasMore && (
                    <div className="text-center mt-12 animate-fade-in animation-delay-500">
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-5 h-5"/>
                        </AnimatedBorderButton>
                    </div>
                )}
            </div>             
        </section>
    )
}