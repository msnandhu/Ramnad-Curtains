import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import hero1 from '../../assets/hero-1.png';
import hero2 from '../../assets/hero-2.png';

const slides = [
    {
        id: 1,
        image: hero1,
        title: "Elegance in Every Fold",
        subtitle: "Premium curtains designed to transform your space.",
        cta: "Shop Curtains",
        link: "/shop?category=curtains"
    },
    {
        id: 2,
        image: hero2,
        title: "Textures That Speak",
        subtitle: "Discover our exclusive collection of modern wallpapers.",
        cta: "Explore Wallpapers",
        link: "/shop?category=wallpapers"
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    >
                        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-center justify-center text-center px-4">
                        <div className="max-w-4xl">
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-white text-base md:text-lg font-medium tracking-[0.3em] uppercase mb-4"
                            >
                                Ramnad Curtains
                            </motion.h2>
                            <motion.h1
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
                            >
                                {slides[current].title}
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="text-gray-200 text-lg md:text-xl mb-10 font-light"
                            >
                                {slides[current].subtitle}
                            </motion.p>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.1, duration: 0.8 }}
                            >
                                <a
                                    href={slides[current].link}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold text-sm tracking-widest hover:bg-gray-200 transition-colors duration-300"
                                >
                                    {slides[current].cta.toUpperCase()} <ArrowRight size={16} />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-10"
            >
                <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-10"
            >
                <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-12 h-1 transition-colors duration-300 ${index === current ? 'bg-white' : 'bg-white/30'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
