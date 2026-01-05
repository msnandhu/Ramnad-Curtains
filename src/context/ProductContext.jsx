import React, { createContext, useContext, useState, useEffect } from 'react';
import hero1 from '../assets/hero-1.png';
import hero2 from '../assets/hero-2.png';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

const generateProducts = () => {
    const products = [];
    const categories = ['curtains', 'wallpapers'];
    const materials = ['Velvet', 'Linen', 'Cotton', 'Polyester', 'Silk'];
    const colors = ['Black', 'White', 'Charcoal', 'Grey', 'Off-White'];

    for (let i = 1; i <= 50; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const material = materials[Math.floor(Math.random() * materials.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        products.push({
            id: i,
            name: `${color} ${material} ${category === 'curtains' ? 'Curtain' : 'Wallpaper'}`,
            category: category,
            price: Math.floor(Math.random() * 5000) + 1500,
            image: i % 2 === 0 ? hero1 : hero2,
            isNew: Math.random() > 0.8,
            description: `Premium high-quality ${material} ${category} in ${color}. Perfect for modern interiors.`,
            specs: {
                material,
                color,
                origin: 'Imported'
            }
        });
    }
    return products;
};

export const ProductProvider = ({ children }) => {
    const [products] = useState(generateProducts());
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Filter products
    const getProductsByCategory = (category) => {
        return products.filter(p => p.category === category);
    };

    const getFeaturedProducts = () => {
        return products.slice(0, 4);
    };

    const getNewArrivals = () => {
        return products.filter(p => p.isNew).slice(0, 4);
    };

    const getProductById = (id) => {
        return products.find(p => p.id === parseInt(id));
    };

    // Cart Logic
    const addToCart = (product, quantity = 1, variant = 'Standard') => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id && item.variant === variant);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id && item.variant === variant
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity, variant }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id, variant) => {
        setCart(prev => prev.filter(item => !(item.id === id && item.variant === variant)));
    };

    const updateQuantity = (id, variant, delta) => {
        setCart(prev => prev.map(item => {
            if (item.id === id && item.variant === variant) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        }));
    };

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <ProductContext.Provider value={{
            products,
            cart,
            isCartOpen,
            setIsCartOpen,
            addToCart,
            removeFromCart,
            updateQuantity,
            cartTotal,
            getProductById,
            getProductsByCategory,
            getFeaturedProducts,
            getNewArrivals
        }}>
            {children}
        </ProductContext.Provider>
    );
};
