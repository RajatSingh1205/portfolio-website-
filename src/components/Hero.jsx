import React from "react";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-black text-white flex items-center px-20"
        >
            <div className="w-1/2 space-y-6">
                <p className="text-cyan-400 text-xl">Hello, I'm</p>

                <h1 className="text-6xl font-bold">
                    Rajat Kumar Singh
                </h1>

                <h2 className="text-3xl text-gray-400">
                    Full Stack Developer
                </h2>

                <p className="text-gray-300 max-w-xl leading-8">
                    I build responsive web applications using Java, React,
                    Spring Boot, MongoDB, and modern web technologies.
                    Passionate about solving problems and creating beautiful,
                    user-friendly experiences.
                </p>

                <div className="flex gap-5">
                    <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition">
                        Hire Me
                    </button>

                    <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg transition">
                        Download CV
                    </button>
                </div>
            </div>

            <div className="w-1/2 flex justify-center">
                <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_Zuz3haRHrSz0f3bnMlUTGa14Qc7Z5LLQ3-l04P98hv9CMXQU"
                    alt="Profile"
                    className="w-96 rounded-full border-4 border-cyan-500"
                />
            </div>
        </section>
    );
};

export default Hero;