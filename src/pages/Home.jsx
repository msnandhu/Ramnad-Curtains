import React from 'react';
import HeroSlider from '../components/ui/HeroSlider';
import ProductGrid from '../components/ui/ProductGrid';
import InstagramFeed from '../components/ui/InstagramFeed';
import { useProducts } from '../context/ProductContext';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { getFeaturedProducts, getNewArrivals } = useProducts();

    const featuredProducts = getFeaturedProducts();
    const newArrivals = getNewArrivals();

    return (
        <div className="min-h-screen bg-off-white pb-20">
            {/* Hero Section */}
            <HeroSlider />

            {/* Features Banner */}
            <section className="bg-black text-white py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center gap-4">
                            <Star className="text-gray-400" size={32} strokeWidth={1} />
                            <div>
                                <h3 className="text-lg font-bold uppercase tracking-widest mb-1">Premium Quality</h3>
                                <p className="text-gray-400 text-sm">Finest fabrics and materials.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <ShieldCheck className="text-gray-400" size={32} strokeWidth={1} />
                            <div>
                                <h3 className="text-lg font-bold uppercase tracking-widest mb-1">Secure Checkout</h3>
                                <p className="text-gray-400 text-sm">100% safe payment processing.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Truck className="text-gray-400" size={32} strokeWidth={1} />
                            <div>
                                <h3 className="text-lg font-bold uppercase tracking-widest mb-1">Fast Shipping</h3>
                                <p className="text-gray-400 text-sm">Reliable delivery to your door.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Collection */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-10">
                        <h2 className="text-3xl font-bold tracking-tight uppercase">Featured Collection</h2>
                        <Link to="/shop" className="flex items-center gap-2 hover:text-gray-500 transition-colors">
                            View All <ArrowRight size={18} />
                        </Link>
                    </div>
                    <ProductGrid products={featuredProducts} />
                </div>
            </section>

            {/* Promotional Banner */}
            <section className="bg-gray-100 py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">Elevate Your Space</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                        Discover our exclusive range of wallpapers designed to transform any room into a masterpiece of modern design.
                    </p>
                    <Link to="/shop?category=wallpapers" className="inline-block px-12 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                        Shop Wallpapers
                    </Link>
                </div>
            </section>

            {/* New Arrivals */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight uppercase mb-10 text-center">New Arrivals</h2>
                    <ProductGrid products={newArrivals} />
                    <div className="mt-12 text-center">
                        <Link to="/shop" className="inline-block px-12 py-3 border border-black text-black font-medium tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                            VIEW ALL PRODUCTS
                        </Link>
                    </div>
                </div>
            </section>

            {/* Instagram Feed */}
            <InstagramFeed />
        </div>
    );
};

export default Home;
