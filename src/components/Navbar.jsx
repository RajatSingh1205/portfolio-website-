import React from "react";

export const Navbar = () => {
    const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

    return (
        <nav className="h-16 bg-black text-white flex items-center justify-between px-20">
            {/* Logo */}
            <h1 className="text-2xl font-bold tracking-wide">
                Rajat Kumar Singh
            </h1>

            {/* Navigation Links */}
            <ul className="flex gap-8 text-lg">
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
        </nav>
    );
};

export default Navbar;