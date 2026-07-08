import React from "react";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <section id="projects" className="bg-black text-white py-20 px-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center">
                    My <span className="text-cyan-400">Projects</span>
                </h2>

                <p className="text-center text-gray-400 mt-4 mb-14">
                    Some projects I've built using modern technologies.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-cyan-400 transition duration-300"
                        >
                            {/*<img*/}
                            {/*    src={project.image}*/}
                            {/*    alt={project.title}*/}
                            {/*    className="h-56 w-full object-cover"*/}
                            {/*/>*/}

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mt-3">
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
                                        className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                                    >
                                        GitHub
                                    </a>

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;