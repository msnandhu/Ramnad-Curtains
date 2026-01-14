import React, { useState } from 'react';
import { ProductContext } from './ProductContext';
import hero1 from '../assets/hero-1.png';
import hero2 from '../assets/hero-2.png';
import insta1 from '../assets/insta-1.png';
import insta2 from '../assets/insta-2.png';
import curtain1 from '../assets/product-curtain-1.jpg';
import curtain2 from '../assets/product-curtain-2.jpg';
import curtain3 from '../assets/product-curtain-3.jpg';
import curtain4 from '../assets/product-curtain-4.jpg';
import curtain5 from '../assets/product-curtain-5.jpg';
import wallsticker1 from '../assets/product-wallsticker-1.jpg';
import wallsticker2 from '../assets/product-wallsticker-2.jpg';
import wallsticker3 from '../assets/product-wallsticker-3.jpg';
import wallsticker4 from '../assets/product-wallsticker-4.jpg';

const generateProducts = () => {
    const fixedProducts = [
        {
            id: 101,
            name: "Premium Beige Pleated Curtain",
            category: "curtains",
            price: 3500,
            image: curtain1,
            isNew: true,
            description: "Elegant beige pleated curtains that add a touch of sophistication to any room. High-quality fabric ensures durability and style.",
            specs: { material: "Polyester Blend", color: "Beige", origin: "Imported" }
        },
        {
            id: 102,
            name: "Modern Charcoal Grey Curtain",
            category: "curtains",
            price: 4200,
            image: curtain2,
            isNew: true,
            description: "Sleek charcoal grey curtains perfect for modern minimalist interiors. Provides excellent light control and privacy.",
            specs: { material: "Velvet", color: "Charcoal", origin: "Imported" }
        },
        {
            id: 103,
            name: "Classic Deep Brown Drapery",
            category: "curtains",
            price: 3800,
            image: curtain3,
            isNew: true,
            description: "Rich deep brown drapery that brings warmth and luxury to your living space. Heavyweight fabric for a premium feel.",
            specs: { material: "Cotton", color: "Brown", origin: "Imported" }
        },
        {
            id: 104,
            name: "Soft White Sheer Panel",
            category: "sheer curtains",
            price: 2500,
            image: curtain4,
            isNew: true,
            description: "Light and airy soft white sheer panels. Allows natural light to filter through while maintaining privacy.",
            specs: { material: "Linen", color: "White", origin: "Imported" }
        },
        {
            id: 105,
            name: "Luxury Dual-Tone Curtain",
            category: "curtains",
            price: 5500,
            image: curtain5,
            isNew: true,
            description: "Exquisite dual-tone curtains featuring a blend of complimentary colors. A statement piece for your windows.",
            specs: { material: "Jacquard", color: "Multicolor", origin: "Imported" }
        },
        {
            id: 201,
            name: "Abstract Gold & Black Wall Sticker",
            category: "wallpapers",
            price: 1200,
            image: wallsticker1,
            isNew: true,
            description: "Striking abstract gold and black wall sticker design. Adds a bold luxury statement to any feature wall.",
            specs: { material: "Vinyl", color: "Gold/Black", origin: "Imported" }
        },
        {
            id: 202,
            name: "Elegant Beige Waves Wallpaper",
            category: "wallpapers",
            price: 1500,
            image: wallsticker2,
            isNew: true,
            description: "Soft and flowing beige wave patterns create a calming atmosphere. Perfect for living rooms and bedrooms.",
            specs: { material: "Non-Woven", color: "Beige", origin: "Imported" }
        },
        {
            id: 203,
            name: "Tropical Fern Leaves Mural",
            category: "wallpapers",
            price: 1800,
            image: wallsticker3,
            isNew: true,
            description: "Bring nature indoors with this detailed tropical fern leaves wall mural. Deep greens and earthy tones.",
            specs: { material: "Vinyl", color: "Green/Brown", origin: "Imported" }
        },
        {
            id: 204,
            name: "Grey Marble Gold Accent Sticker",
            category: "wallpapers",
            price: 1450,
            image: wallsticker4,
            isNew: true,
            description: "Sophisticated grey marble design with metallic gold accents. Easy to apply self-adhesive wall sticker.",
            specs: { material: "PVC", color: "Grey/Gold", origin: "Imported" }
        }
    ];

    const products = [...fixedProducts];
    const categories = ['curtains', 'wallpapers', 'blinds', 'sheer curtains'];
    const materials = ['Velvet', 'Linen', 'Cotton', 'Polyester', 'Silk', 'Bamboo', 'Polyester Blend', 'Jacquard'];
    const colors = ['Black', 'White', 'Charcoal', 'Grey', 'Off-White', 'Beige', 'Navy Blue', 'Teal', 'Burgundy'];
    const images = [hero1, hero2, insta1, insta2];

    for (let i = 1; i <= 100; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const material = materials[Math.floor(Math.random() * materials.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const image = images[i % 4];

        let nameCategory = 'Curtain';
        if (category === 'wallpapers') nameCategory = 'Wallpaper';
        else if (category === 'blinds') nameCategory = 'Blind';
        else if (category === 'sheer curtains') nameCategory = 'Sheer Curtain';

        products.push({
            id: i,
            name: `${color} ${material} ${nameCategory}`,
            category: category,
            price: Math.floor(Math.random() * 5000) + 1500,
            image: image,
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
