import React from "react";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center">
                    Contact <span className="text-cyan-400">Me</span>
                </h2>

                <p className="text-center text-gray-400 mt-4 mb-14">
                    Have a project in mind or want to work together? Feel free to reach
                    out.
                </p>

                <div className="max-w-xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8 text-center [&>div]:justify-center">
                        <h3 className="text-3xl font-semibold">Let's Connect</h3>

                        <div className="flex items-center gap-4">
                            <Mail className="text-cyan-400" size={22} />
                            <a href="mailto:rajat.k.singh1209@gmail.com" className="hover:text-cyan-400 transition">rajat.k.singh1209@gmail.com</a>
                        </div>

                        <div className="flex items-center gap-4">
                            <MapPin className="text-cyan-400" size={22} />
                            <span>India</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-6 pt-4">
                            <a
                                href="https://github.com/RajatSingh1205"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-white transition font-semibold"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/rajat-singh-776705360/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-white transition font-semibold"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-20">
                © {new Date().getFullYear()} Rajat Kumar Singh. All rights reserved.
            </p>
        </section>
    );
};

export default Contact;