import React from "react";

const stats = [
    { value: "4", label: "Projects built" },
    { value: "Java", label: "Backend focus" },
    { value: "React", label: "Frontend focus" },
];

const About = () => {
    return (
        <section id="about" className="bg-black text-white py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center">
                    About <span className="text-cyan-400">Me</span>
                </h2>

                <p className="text-gray-300 leading-8 text-center mt-8">
                    I'm a full stack developer who enjoys turning ideas into
                    working products. On the backend I work with Java, Spring
                    Boot, Hibernate, and databases like MySQL, MongoDB, and
                    Redis. On the frontend I build clean, responsive interfaces
                    with React and Tailwind CSS.
                </p>

                <div className="grid grid-cols-3 gap-4 mt-12">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl py-6 text-center"
                        >
                            <p className="text-2xl sm:text-3xl font-bold text-cyan-400">
                                {s.value}
                            </p>
                            <p className="text-gray-400 text-sm mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
