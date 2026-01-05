import React from 'react';
import { Instagram } from 'lucide-react';
import insta1 from '../../assets/insta-1.png';
import insta2 from '../../assets/insta-2.png';
import hero1 from '../../assets/hero-1.png';
import hero2 from '../../assets/hero-2.png';

const InstagramFeed = () => {
    const posts = [
        { id: 1, image: insta2, caption: "Royal elegance for your home." },
        { id: 2, image: insta1, caption: "Modern zebra blinds for a sleek look." },
        { id: 3, image: hero1, caption: "Premium curtains in neutral tones." },
        { id: 4, image: hero2, caption: "Transform your space with our wallpapers." },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold tracking-tight uppercase mb-4">Follow Us on Instagram</h2>
                    <p className="text-gray-500 mb-6">@ramnad_curtains</p>
                    <a
                        href="https://www.instagram.com/ramnad_curtains?igsh=aWJqNnk5NnBpbmo1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                    >
                        <Instagram size={18} />
                        Follow Us
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href="https://www.instagram.com/ramnad_curtains?igsh=aWJqNnk5NnBpbmo1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square overflow-hidden bg-gray-100 block"
                        >
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                <Instagram className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
