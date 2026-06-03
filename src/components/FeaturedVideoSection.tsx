import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FeaturedVideoSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 0.9 }}
                    className="rounded-3xl overflow-hidden aspect-video relative"
                >
                    <video
                        className="w-full h-full object-cover"
                        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
                        muted
                        autoPlay
                        loop
                        playsInline
                        preload="auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-10">
                        {/* Left */}
                        <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md w-full">
                            <p className="text-white/50 text-xs tracking-widest uppercase mb-3">My Approach</p>
                            <p className="text-white text-sm md:text-base leading-relaxed">
                                I believe in the power of code and creative exploration. Every project starts with a logic-driven foundation, and every interface opens a new door to immersive user experiences.
                            </p>
                        </div>

                        {/* Right */}
                        <motion.a
                            href="https://github.com/vedbahe"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="liquid-glass flex-shrink-0 rounded-full px-8 py-3 text-white text-sm font-medium self-start md:self-end text-center whitespace-nowrap block"
                        >
                            View Github
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
