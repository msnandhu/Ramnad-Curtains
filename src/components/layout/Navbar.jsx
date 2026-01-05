import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useProducts } from '../../context/ProductContext';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
    const { cart, setIsCartOpen } = useProducts();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'CURTAINS', path: '/shop?category=curtains' },
        { name: 'WALLPAPERS', path: '/shop?category=wallpapers' },
        { name: 'NEW ARRIVALS', path: '/shop' },
        { name: 'ABOUT', path: '/about' },
    ];

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            window.location.href = `/shop?search=${e.target.value}`;
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled || isMobileMenuOpen ? 'bg-white text-black shadow-sm' : 'bg-transparent text-black'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center z-50">
                        <img src={logo} alt="Ramnad Curtains" className="h-12 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium tracking-widest hover:text-gray-500 transition-colors ${isActive ? 'border-b-2 border-black' : ''
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        {isSearchOpen ? (
                            <div className="relative">
                                <input
                                    type="text"
                                    autoFocus
                                    placeholder="Search..."
                                    className="border-b border-black bg-transparent outline-none w-40 text-sm py-1"
                                    onKeyDown={handleSearch}
                                    onBlur={() => setIsSearchOpen(false)}
                                />
                            </div>
                        ) : (
                            <button onClick={() => setIsSearchOpen(true)} className="hover:text-gray-500 transition-colors">
                                <Search size={22} strokeWidth={1.5} />
                            </button>
                        )}

                        <Link to="/account" className="hover:text-gray-500 transition-colors">
                            <User size={22} strokeWidth={1.5} />
                        </Link>
                        <button onClick={() => setIsCartOpen(true)} className="relative hover:text-gray-500 transition-colors">
                            <ShoppingBag size={22} strokeWidth={1.5} />
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {cart.length}
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-2xl font-light tracking-wider border-b border-gray-100 pb-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-8 flex space-x-6">
                            <Link to="/account" className="flex items-center space-x-2 text-lg font-light">
                                <User size={20} />
                                <span>Account</span>
                            </Link>
                            <button onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }} className="flex items-center space-x-2 text-lg font-light">
                                <ShoppingBag size={20} />
                                <span>Cart ({cart.length})</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
