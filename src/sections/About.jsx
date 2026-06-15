import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const skillCategories = [
    {
        category: "Programming Languages",
        skills: [
            { name: "Python",     svg: <img src="/DEV-PERSONAL-PORTFOLIO/assets/icons/programming_lang/python.svg"     alt="Python"      className="w-8 h-8" /> },
            { name: "Java",       svg: <img src="/src/assets/icons/programming_lang/java.svg"       alt="Java"        className="w-8 h-8" /> },
            { name: "C++",        svg: <img src="/src/assets/icons/programming_lang/cplusplus.svg"  alt="C++"         className="w-8 h-8" /> },
            { name: "JavaScript", svg: <img src="/src/assets/icons/programming_lang/javascript.svg" alt="JavaScript"  className="w-8 h-8" /> },
            { name: "TypeScript", svg: <img src="/src/assets/icons/programming_lang/typescript.svg" alt="TypeScript"  className="w-8 h-8" /> },
            { name: "PHP",        svg: <img src="/src/assets/icons/programming_lang/php.svg"        alt="PHP"         className="w-8 h-8" /> },
        ],
    },
    {
        category: "Web Development",
        skills: [
            { name: "HTML",       svg: <img src="/src/assets/icons/web_dev/html5.svg"      alt="HTML"        className="w-8 h-8" /> },
            { name: "CSS",        svg: <img src="/src/assets/icons/web_dev/css3.svg"       alt="CSS"         className="w-8 h-8" /> },
            { name: "React",      svg: <img src="/src/assets/icons/web_dev/react.svg"      alt="React"       className="w-8 h-8" /> },
            { name: "Node.js",    svg: <img src="/src/assets/icons/web_dev/nodedotjs.svg"     alt="Node.js"     className="w-8 h-8" /> },
            { name: "FastAPI",    svg: <img src="/src/assets/icons/web_dev/fastapi.svg"    alt="FastAPI"     className="w-8 h-8" /> },
            { name: "Express",    svg: <img src="/src/assets/icons/web_dev/expressdotjs.svg"    alt="Express"     className="w-8 h-8" /> },
            { name: "Flutter",    svg: <img src="/src/assets/icons/web_dev/flutter.svg"    alt="Flutter"     className="w-8 h-8" /> },
            { name: "Tailwind",   svg: <img src="/src/assets/icons/web_dev/tailwind-css.svg" alt="Tailwind"  className="w-8 h-8" /> },
        ],
    },
    {
        category: "Databases",
        skills: [
            { name: "MySQL",      svg: <img src="/src/assets/icons/db/mysql.svg"      alt="MySQL"       className="w-8 h-8" /> },
            { name: "PostgreSQL", svg: <img src="/src/assets/icons/db/postgresql.svg" alt="PostgreSQL"  className="w-8 h-8" /> },
            { name: "MongoDB",    svg: <img src="/src/assets/icons/db/mongodb.svg"    alt="MongoDB"     className="w-8 h-8" /> },
            { name: "Firebase",   svg: <img src="/src/assets/icons/db/firebase.svg"   alt="Firebase"    className="w-8 h-8" /> },
            { name: "Supabase",   svg: <img src="/src/assets/icons/db/supabase.svg"   alt="Supabase"    className="w-8 h-8" /> },
            { name: "HiveMQ",     svg: <img src="/src/assets/icons/db/hivemq.svg"     alt="HiveMQ"      className="w-8 h-8" /> },

        ],
    },
    {
        category: "Tools & Frameworks",
        skills: [
            { name: "Git",        svg: <img src="/src/assets/icons/tools/git.svg"        alt="Git"         className="w-8 h-8" /> },
            { name: "GitHub",     svg: <img src="/src/assets/icons/tools/github.svg"     alt="GitHub"      className="w-8 h-8" /> },
            { name: "VS Code",    svg: <img src="/src/assets/icons/tools/visual-studio-code.svg"     alt="VS Code"     className="w-8 h-8" /> },
            { name: "Postman",    svg: <img src="/src/assets/icons/tools/postman.svg"    alt="Postman"     className="w-8 h-8" /> },
            { name: "Figma",      svg: <img src="/src/assets/icons/tools/figma.svg"      alt="Figma"       className="w-8 h-8" /> },
            { name: "NetBeans",     svg: <img src="/src/assets/icons/tools/apache-netbeans-ide.svg"     alt="NetBeans"      className="w-8 h-8" /> },
            { name: "IntelliJ IDEA",     svg: <img src="/src/assets/icons/tools/intellij-idea.svg"     alt="IntelliJ IDEA"      className="w-8 h-8" /> },
            { name: "Canva",     svg: <img src="/src/assets/icons/tools/canva.svg"     alt="Canva"      className="w-8 h-8" /> },
            { name: "Vercel",     svg: <img src="/src/assets/icons/tools/vercel.svg"     alt="Vercel"      className="w-8 h-8" /> },


        ],
    },
];


// const highlights = [
//     {
//         icon: Code2,
//         title: "Clean Code",
//         description: "Writing maintainable, scalable code that stands the test of time.",
//     },
//     {
//         icon: Rocket,
//         title: "Performance",
//         description: "Optimizing for speed and delivering lightning-fast user experiences.",
//     },
//     {
//         icon: Users,
//         title: "Collaboration",
//         description: "Working close with team to bring ideas to life",
//     },
//     {
//         icon: Lightbulb,
//         title: "Innovation",
//         description: "Staying ahead with the latest technologies and best practices.",
//     },
// ];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>
                        <h2 className="text-4xl mb:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Driven by Logic,
                        <span className="font-serif italic font-normal text-white"> Guided by Leadership.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am a Software Engineering undergraduate at the Informatics Institute of Technology (University of Westminster) with a strong focus on <span className="text-gray-300">backend architecture and full-stack development.</span></p>
                            <p>
                                My technical journey is driven by a deep curiosity for building robust, production-grade systems that solve tangible, real-world problems. Recently, I successfully built and deployed <span className="text-gray-300">AquaSense</span>, a live <span className="text-gray-300">IoT water monitoring platform</span>, which allowed me to bridge the gap between embedded hardware, high-performance REST APIs, and mobile interfaces.</p>
                            <p>
                                Beyond writing clean, algorithmic code, my background as <span className="text-gray-300"> Head Prefect</span> and <span className="text-gray-300">Vice-Captain</span> of a 1st XV Rugby team has instilled a strong foundation in discipline, leadership, and high-stakes teamwork. I thrive in collaborative environments where I can tackle complex technical challenges, optimize system performance, and continuously grow as a professional engineer.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                My mission is to craft bespoke, high-performance software with uncompromising precision, executing complex backend strategies to build systems that absolutely command their domain.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highligts  */}
                    {/* <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass p-6 rounded-2xl animate-fade-in "
                                style={{animationDelay: `${(idx + 1)*100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold md-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div> */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {skillCategories.map((category, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {category.skills.map((skill, skillIdx) => (
                                        <div
                                            key={skillIdx}
                                            className="flex flex-col items-center gap-1.5 group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                                                {skill.svg}
                                            </div>
                                            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};