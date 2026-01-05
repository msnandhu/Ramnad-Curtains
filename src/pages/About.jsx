import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ShieldCheck, PenTool, Truck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const features = [
        {
            icon: <ShieldCheck size={32} strokeWidth={1} />,
            title: "Premium Quality",
            description: "We source only the finest fabrics and materials to ensure durability and elegance in every fold."
        },
        {
            icon: <PenTool size={32} strokeWidth={1} />,
            title: "Custom Design",
            description: "Tailored to perfection. Our curtains are designed to fit your unique space and style requirements."
        },
        {
            icon: <Truck size={32} strokeWidth={1} />,
            title: "Fast Delivery",
            description: "Efficient processing and shipping to get your new look to your windows as quickly as possible."
        },
        {
            icon: <Heart size={32} strokeWidth={1} />,
            title: "Made with Love",
            description: "Every product is crafted with passion and attention to detail, from our hands to your home."
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-20 pb-20">
            {/* Hero Section */}
            <section className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 mb-20 overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6"
                    >
                        We Are Ramnad Curtains
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        Redefining home aesthetics with a blend of tradition and modern luxury.
                    </motion.p>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gray-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50 blur-3xl pointer-events-none"></div>
            </section>

            {/* Our Story Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Founded in 2024, Ramnad Curtains began with a simple mission: to make high-quality, stylish window treatments accessible to everyone. We noticed a gap in the market for curtains that were not only functional but also served as a centerpiece for interior design.
                            </p>
                            <p>
                                What started as a small passion project has grown into a destination for homeowners looking to elevate their living spaces. We believe that curtains are more than just fabric; they are the finishing touch that transforms a house into a home.
                            </p>
                            <p>
                                Based in the heart of Ramnad, we draw inspiration from both local heritage and global design trends, bringing you collections that are timeless yet contemporary.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-96 bg-gray-100 rounded-lg overflow-hidden"
                    >
                        {/* Placeholder for an About Image - using a gradient/pattern for now if no image is available, 
                            or we can reuse one of the hero images if appropriate, but a unique one is better.
                            Using a subtle abstract pattern for "premium" feel. */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <span className="text-gray-400 font-light tracking-widest uppercase">Interior Excellence</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values / Features Section */}
            <section className="bg-black text-white py-24 mb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">Why Choose Us</h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            We don't just sell curtains; we provide an experience of luxury and comfort.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="space-y-4 group"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wide">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed px-4">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">
                        Ready to Transform Your View?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Explore our latest collections and find the perfect match for your home.
                    </p>
                    <Link
                        to="/shop"
                        className="inline-block bg-black text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                    >
                        Shop Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
