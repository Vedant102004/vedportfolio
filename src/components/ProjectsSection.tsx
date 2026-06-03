import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Thunder Cafe",
        url: "https://thunder-cafe-7mr6.vercel.app/",
        tags: "React, Three.js, GSAP",
        description: "Immersive 3D scrolling experience and modern web development."
    },
    {
        title: "Bistro Cafe",
        url: "https://bistro-cafe-eight.vercel.app/",
        tags: "React, Tailwind",
        description: "A modern, interactive landing page for a premium dining experience."
    },
    {
        title: "Hair House ATX",
        url: "https://hairhouseatxeta.vercel.app/",
        tags: "Web App, Styling",
        description: "A sleek, raw-aesthetic interface tailored for a modern grooming brand."
    },
    {
        title: "Whip My Soul",
        url: "https://whip-my-soul.vercel.app/",
        tags: "Frontend, UI/UX",
        description: "Creative design and smooth layout animations for an engaging web flow."
    },
    {
        title: "Under the Jamun Tree",
        url: "https://underthejamuntree.vercel.app/",
        tags: "React, Cinematic UI",
        description: "An elegant, highly-performant website featuring cinematic visual styles."
    },
    {
        title: "Red Oak",
        url: "https://redoak-nu.vercel.app/",
        tags: "Landing Page, Interactive",
        description: "A minimalist and high-performance layout pushing the boundaries of clean web design."
    },
    {
        title: "Chocolate Story",
        url: "https://chocolate-story.vercel.app/",
        tags: "E-commerce, UI",
        description: "A beautifully crafted storytelling and product showcase interface."
    }
];

export default function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="bg-black py-28 md:py-40 px-6 overflow-hidden relative" id="projects">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                    className="flex justify-between items-end mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-5xl text-white tracking-tight">Selected Works</h2>
                    <p className="text-white/40 text-sm hidden md:block">My Projects</p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {projects.map((project, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="liquid-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between group transition-transform duration-500 hover:scale-[1.02] min-h-[250px] h-full block"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <span className="uppercase tracking-widest text-white/40 text-[10px] md:text-xs">
                                        {project.tags}
                                    </span>
                                    <div className="liquid-glass rounded-full p-2 circle transition-transform duration-300 group-hover:rotate-45">
                                        <ArrowUpRight className="text-white w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-white text-xl md:text-2xl mb-2 tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
