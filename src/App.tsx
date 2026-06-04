import { useEffect, useRef } from 'react';
import { ArrowRight, Globe } from 'lucide-react';

import AboutSection from './components/AboutSection';
import FeaturedVideoSection from './components/FeaturedVideoSection';
import PhilosophySection from './components/PhilosophySection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;
    let isFadingOut = false;
    let isFadingIn = false;

    const fade = (targetOpacity: number, duration: number, callback?: () => void) => {
      const startOpacity = parseFloat(video.style.opacity || '0');
      const startTime = performance.now();

      const animate = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        video.style.opacity = (startOpacity + (targetOpacity - startOpacity) * progress).toString();

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        } else if (callback) {
          callback();
        }
      };

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    const handleCanPlay = () => {
      if (video.currentTime === 0 && parseFloat(video.style.opacity || '0') === 0 && !isFadingIn) {
        video.play().catch(() => { });
        isFadingIn = true;
        fade(1, 500, () => { isFadingIn = false; });
      }
    };

    const handleTimeUpdate = () => {
      if (Number.isNaN(video.duration)) return;

      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && !isFadingOut) {
        isFadingOut = true;
        fade(0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => { });
        isFadingOut = false;
        isFadingIn = true;
        fade(1, 500, () => { isFadingIn = false; });
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    video.style.opacity = '0';
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white/20">

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          muted
          autoPlay
          playsInline
          preload="auto"
        />

        {/* Navbar */}
        <nav className="relative z-20 px-6 py-6 w-full">
          <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
            {/* Left */}
            <div className="flex items-center">
              <Globe className="w-6 h-6 text-white mr-2" />
              <span className="text-white font-semibold text-lg">Vedant Bahe</span>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-8 ml-8">
                <a href="#projects" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Projects</a>
                <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <a href="#" className="hidden sm:block text-white text-sm font-medium hover:text-white/80 transition-colors">Resume</a>
              <a href="https://wa.me/919993498363" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                Let's Talk
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
          <h1 className="text-7xl md:text-8xl lg:text-9xl tracking-tight whitespace-nowrap font-['Instrument_Serif'] mb-8 text-white">
            Crafting then experiences.
          </h1>

          {/* Email Contact */}
          <div className="max-w-xl w-full mb-8">
            <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-3">
              <input
                type="text"
                disabled
                placeholder="vedbahe@gmail.com"
                className="bg-transparent border-none outline-none text-white placeholder:text-white/90 text-sm md:text-base w-full min-w-0"
              />
              <a
                href="mailto:vedbahe@gmail.com"
                className="flex-shrink-0 bg-white hover:bg-gray-200 transition-colors rounded-full p-3 text-black flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <p className="text-white text-sm leading-relaxed px-4 max-w-lg">
            I build modern web experiences using cutting-edge frontend technologies. Reach out to collaborate or explore my work below.
          </p>
        </div>

        {/* Social Icons Footer */}
        <div className="relative z-10 flex justify-center gap-4 pb-12 mt-auto">
          <a href="https://github.com/Vedant102004" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/vedant-bahe/" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="#" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
          </a>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <div id="about">
        <AboutSection />
      </div>
      <FeaturedVideoSection />
      <PhilosophySection />
      <ProjectsSection />

    </div>
  );
}

export default App;
