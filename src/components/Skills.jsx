import Card from "./cards.jsx";        // was "./Card"
import { skills } from "./skills.js";  // was "../skills"

const Skills = () => {
    return (
        <section className="px-10 py-12">
            <h1 className="mb-10 text-4xl font-bold text-white">
                Skills
            </h1>

            <div className="flex flex-wrap justify-center gap-8">
                {skills.map((skill) => (
                    <Card key={skill.id} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;