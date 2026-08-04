import {Button} from '@/components/Button';
import { ArrowRight, Download, ChevronDown} from 'lucide-react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

const CV_FILE_PATH = "/assets/Ishan_Udawatte_CV.pdf";

const skills = [
    "Critical Thinking",
    "Teamwork",
    "Communication Skills",
    "Problem Solving",
    "Leadership",
    "Time Management",
    "Adaptability",
    "Analytical Thinking",
    "Project Coordination",
    "Stakeholder Management",
    "Attention to Detail",
    "Decision Making",
    "Event Coordination",
    "Continuous Learning",
    "Resilience"
];

export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* background */}

        <div className="absolute inset-0">
            <img 
            src="/assets/a.png"
            alt="Hero img"
            className="w-full h-full object-cover opacity-90"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background"/>
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div 
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "#757575 ",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${
                        15 + Math.random() * 20
                    }s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Software Engineer • Backend Developer
                        </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Hi, I'm <span className="text-primary glow-text">Ishan Udawatte</span> <br/>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                              A Software Engineering undergraduate specializing in React, Next.js, and TypeScript. I have a passion for crafting seamless user experiences and translating complex problems into elegant, scalable web applications.

                                </p>

                                <p className="text-muted-foreground">
                                    Welcome to my digital workspace. Inside, you will find:
                                </p>

                                {/* list-disc brings the bullets back, pl-5 indents them nicely */}
                                <ul className="text-muted-foreground list-disc pl-5 space-y-3">
                                    <li>
                                    <strong>About Me:</strong> The journey and drive behind my code.
                                    </li>
                                    <li>
                                    <strong>My Skills:</strong> The modern tech stack and tools I use daily.
                                    </li>
                                    <li>
                                    <strong>My Projects:</strong> Real-world applications I've built and shipped.
                                    </li>
                                    <li>
                                    <strong>My Experience:</strong> My professional background and industry growth.
                                    </li>
                                    <li>
                                    <strong>Contact:</strong> Where to reach me so we can build something amazing together.
                                    </li>
                                </ul>
                    </div>
                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <a href="#contact">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5"/>
                            </Button>
                        </a>
                        
                        <a href={CV_FILE_PATH} download="Ishan_Udawatte_CV.pdf">
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5"/> Download CV
                            </AnimatedBorderButton>
                        </a>
                        
                    </div>
                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground"> Follow me: </span>
                        {[
                            { icon: FaGithub, href: "https://github.com/ishanudawatte"},  
                            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ishan-udawatte-b7bb50257/"},
                            { icon: IoMailOutline, href: "mailto:erangaudawatte7@gmail.com"}
                        ].map((social, idx) => (
                            <a 
                            key={idx} 
                            href={social.href}
                            target="_blank" 
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 target:_blank ">
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div> 
                            {/* className="relative glass rounded-3xl p-2 glow-border" */}
                            <img src="/assets/profile.png" alt="Ishan Udawatte" className="w-full aspect-[4/5] object-cover rounded-4xl"/>
                        </div>
                    </div>
                </div>
            </div>
                {/*Skills Section  */}
                <div className="mt-20 animate-fade-in animation-delay-600 ">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        What I Bring to the Team</p>
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"/>
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"/>
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    </section>
}