import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PhilosophySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="bg-black py-28 md:py-40 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
                >
                    Engineering then <span className="font-['Instrument_Serif'] italic text-white/40">x</span> then Aesthetics.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left: Video */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="rounded-3xl overflow-hidden aspect-[4/3] bg-white/5"
                    >
                        <video
                            className="w-full h-full object-cover"
                            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
                            muted
                            autoPlay
                            loop
                            playsInline
                            preload="auto"
                        />
                    </motion.div>

                    {/* Right: Text blocks */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="mb-10">
                            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Choose your space</p>
                            <p className="text-white/70 text-base md:text-lg leading-relaxed">
                                Every meaningful web product begins at the intersection of robust backend logic and remarkable frontend vision. I operate at that crossroads, turning bold concepts into performant realities.
                            </p>
                        </div>

                        <div className="w-full h-px bg-white/10 mb-10" />

                        <div>
                            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Shape the future</p>
                            <p className="text-white/70 text-base md:text-lg leading-relaxed">
                                I believe that the best work emerges when technical curiosity meets aesthetic conviction. My process is designed to translate raw ideas into digital environments with cinematic precision.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
