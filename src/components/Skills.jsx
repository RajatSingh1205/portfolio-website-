import React from "react";
import { skills } from "../data/skills"; // change the path if needed

const Skills = () => {
    return (
        <section id="skills" className="bg-black text-white py-20 px-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center">
                    My <span className="text-cyan-400">Skills</span>
                </h2>

                <p className="text-center text-gray-400 mt-4 mb-12">
                    Technologies and tools I use to build modern applications.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="bg-zinc-900 rounded-xl p-6 flex flex-col items-center border border-zinc-800 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-16 h-16 object-contain"
                            />

                            <h3 className="mt-4 text-lg font-semibold">
                                {skill.name}
                            </h3>

                            <p className="text-sm text-gray-400">
                                {skill.category}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;