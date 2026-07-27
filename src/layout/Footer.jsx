import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

// Must match the same logo used in Navbar
const LOGO_IMAGE_SRC = "/footer_img.png"; // e.g. "/src/assets/initials.png"

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Ishan101-hub", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ishan-udawatte-b7bb50257/", label: "LinkedIn" },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

                    {/* Left — Logo */}
                    <div className="flex items-center justify-center md:justify-start">
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <img
                                src={LOGO_IMAGE_SRC}
                                alt="Ishan Udawatte"
                                className="h-20 w-auto object-contain"
                            />
                        </a>
                    </div>

                    {/* Center — Nav links + copyright */}
                    <div className="flex flex-col items-center gap-4 flex-1">
                        {/* Nav Links */}
                        <nav className="flex flex-wrap justify-center gap-6">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* Copyright */}
                        <div className="text-center">
                            <p className="text-sm font-medium text-muted-foreground">Ishan Udawatte</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                © {currentYear} All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* Right — Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                aria-label={social.label}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
};