import React from "react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden"
        >
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative max-w-3xl text-center space-y-6 pt-16">
                <p className="text-cyan-400 text-lg sm:text-xl">Hello, I'm</p>

                <h1 className="text-5xl sm:text-7xl font-bold">
                    Rajat Kumar{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Singh
                    </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl text-gray-400">
                    Full Stack Developer
                </h2>

                <p className="text-gray-300 max-w-xl mx-auto leading-8">
                    I build responsive web applications using Java, React,
                    Spring Boot, MongoDB, and modern web technologies.
                    Passionate about solving problems and creating beautiful,
                    user-friendly experiences.
                </p>

                <div className="flex flex-wrap justify-center gap-5 pt-2">
                    <a
                        href="#contact"
                        className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Hire Me
                    </a>

                    <a
                        href="#projects"
                        className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg transition"
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
