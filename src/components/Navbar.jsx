import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition duration-300 ${
                scrolled || open
                    ? "bg-black/80 backdrop-blur border-b border-zinc-800"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
                <a href="#home" className="text-xl sm:text-2xl font-bold tracking-wide text-white">
                    Rajat <span className="text-cyan-400">Singh</span>
                </a>

                <ul className="hidden md:flex gap-8 text-lg text-white">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-cyan-400 transition duration-300"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {open && (
                <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-lg text-white">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setOpen(false)}
                                className="block hover:text-cyan-400 transition"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
