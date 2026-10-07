import React from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <section id="projects" className="bg-black text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center">
                    My <span className="text-cyan-400">Projects</span>
                </h2>

                <p className="text-center text-gray-400 mt-4 mb-14">
                    Some projects I've built using modern technologies.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col bg-zinc-900 rounded-xl border border-zinc-800 hover:border-cyan-400 hover:-translate-y-1 transition duration-300 p-6"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-2xl font-semibold">
                                    {project.title}
                                </h3>
                                {project.featured && (
                                    <span className="shrink-0 bg-cyan-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                                        NEW
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-400 mt-3 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-6">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                                >
                                    GitHub
                                </a>

                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
