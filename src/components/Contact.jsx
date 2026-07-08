import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-5xl font-bold text-center">
                    Contact <span className="text-cyan-400">Me</span>
                </h2>

                <p className="text-center text-gray-400 mt-4 mb-14">
                    Have a project in mind or want to work together? Feel free to reach
                    out.
                </p>

                <div className="grid md:grid-cols-2 gap-12  ">
                    {/* Contact Info */}
                    <div className="space-y-8 ">
                        <h3 className="text-3xl font-semibold">Let's Connect</h3>

                        <div className="flex items-center gap-4">
                            <Mail className="text-cyan-400" size={22} />
                            <span>rajat.k.singh1209@gmail.com</span>
                        </div>

                        {/*<div className="flex items-center gap-4">*/}
                        {/*    <Phone className="text-cyan-400" size={22} />*/}
                        {/*    <span>+91 </span>*/}
                        {/*</div>*/}

                        <div className="flex items-center gap-4">
                            <MapPin className="text-cyan-400" size={22} />
                            <span>India</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 pt-4">
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

                    {/* Contact Form */}
                    {/*<form className="space-y-5">*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        placeholder="Your Name"*/}
                    {/*        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"*/}
                    {/*    />*/}

                    {/*    <input*/}
                    {/*        type="email"*/}
                    {/*        placeholder="Your Email"*/}
                    {/*        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"*/}
                    {/*    />*/}

                    {/*    <textarea*/}
                    {/*        rows={6}*/}
                    {/*        placeholder="Your Message"*/}
                    {/*        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 resize-none"*/}
                    {/*    />*/}

                    {/*    <button*/}
                    {/*        type="submit"*/}
                    {/*        className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"*/}
                    {/*    >*/}
                    {/*        Send Message*/}
                    {/*    </button>*/}
                    {/*</form>*/}
                </div>
            </div>
        </section>
    );
};

export default Contact;