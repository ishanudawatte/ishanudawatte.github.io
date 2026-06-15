import { useState } from "react";
import { Plus, Minus } from "lucide-react";
 
const level5Modules = [
    "Object Oriented Programming",
    "Database Systems",
    "Algorithms Theory Design & Implementation",
    "Server Side Web Development",
    "Software Engineering Principles & Practice",
    "Software Development Group Project",
];
 
const level4Modules = [
    "Mathematics for Computing",
    "Software Development I",
    "Software Development II",
    "Computer Systems Fundamentals",
    "Trends in Computer Science",
    "Web Design and Development",
];
 
const ModuleDropdown = ({ label, modules, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
 
    return (
        <div className="mt-3 border/20 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-surface hover:bg-primary/5 transition-colors duration-200 text-left"
            >
                <span className="text-sm font-medium text-gray-300">{label}</span>
                {isOpen
                    ? <Minus className="w-4 h-4 text-primary flex-shrink-0" />
                    : <Plus className="w-4 h-4 text-primary flex-shrink-0" />
                }
            </button>
            {isOpen && (
                <div className="px-4 py-3 flex flex-col gap-1.5 bg-surface/50">
                    {modules.map((mod, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{mod}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const experiences = [
    {
        period: "Expected Graduation: 2028",
        role: "BEng (Hons) Software Engineering",
        company: "Informatics Institute of Technology · University of Westminster",
        description: "Currently in the internship period having completed Level 4 and Level 5.",
        hasDegreeModules: ["Level 5 — OOP, Database Systems, Algorithms Theory Design & Implementation, Server Side Web Development, Software Engineering Principles & Practice, Software Development Group Project", "Level 4 — Mathematics for Computing, Software Development, Computer Systems Fundamentals, Trends in Computer Science, Web Design and Development"],
        current: true,
    },

    {
        period: "2019 - 2022",
        role: "G.C.E. Advanced Level",
        company: "D.S. Senanayake College · Colombo 07",
        description: "Physical Science stream.",
        technologies: ["Combined Mathematics", "Physics", "Information Technology", "General English"],
        current: false,
    },
    
    {
        period: "2019",
        role: "G.C.E. Ordinary Level",
        company: "D.S. Senanayake College · Colombo 07",
        description: "Achieved 4 A passes, 3 B passes, and 2 C passes across 9 subjects.",
        technologies: ["Mathematics", "English", "ICT", "Science", "Business & Accounting", "Buddhism", "Sinhala", "Arts", "History"],
        current: false,
    },
]

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Academic Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Journey that 
                        <span className="font-serif italic font-normal text-white"> shapes the engineer.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A journey through academia that has built my technical foundations and engineering mindset from the ground up.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32, 178, 166, 0.8)]"/>
                            {/* Experienced Items  */}
                            <div className="space-y-12">
                                {experiences.map((exp, idx) => (
                                    <div 
                                    key={idx} 
                                    className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                    style={{ animationDelay: `${(idx + 1) * 150}ms`}}>

                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                            {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}                                        
                                        </div>

                                        {/* Content */}
                                        <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                            <div className={`glass p-6 rounded-2xl border  hover:border-primary/50 transition-all duration-500`}>
                                                <span className="text-sm text-primary font-medium">{exp.period}</span>
                                                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                                <p className="text-muted-foreground">{exp.company}</p>
                                                <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>

                                                {/* Degree module dropdowns */}
                                        {exp.hasDegreeModules && (
                                            <div className={`mt-2 ${idx % 2 === 0 ? "md:text-left" : ""}`}>
                                                <ModuleDropdown
                                                    label="Level 5 · 6 Modules"
                                                    modules={level5Modules}
                                                    defaultOpen={true}
                                                />
                                                <ModuleDropdown
                                                    label="Level 4 · 6 Modules"
                                                    modules={level4Modules}
                                                    defaultOpen={false}
                                                />
                                            </div>
                                        )}
 
                                        {/* Regular tech tags for non-degree entries */}
                                        {exp.technologies && (
                                            <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                                {exp.technologies.map((tech, techIdx) => (
                                                    <span
                                                        key={techIdx}
                                                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};