import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-tighter uppercase">Ramnad Curtains</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elevating spaces with premium curtains and wallpapers since 2024.
                            Minimalist design meets exceptional quality.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/ramnad_curtains?igsh=aWJqNnk5NnBpbmo1" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/shop?category=curtains" className="hover:text-white transition-colors">Curtains</Link></li>
                            <li><Link to="/shop?category=wallpapers" className="hover:text-white transition-colors">Wallpapers</Link></li>
                            <li><Link to="/shop" className="hover:text-white transition-colors">New Arrivals</Link></li>
                            <li><Link to="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Help</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                            <li><Link to="/care" className="hover:text-white transition-colors">Care Instructions</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-b border-gray-700 text-white placeholder-gray-500 py-2 focus:outline-none focus:border-white transition-colors text-sm"
                            />
                            <button className="flex items-center justify-between bg-white text-black px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                                Subscribe <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
                    <p>&copy; 2024 Ramnad Curtains. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
