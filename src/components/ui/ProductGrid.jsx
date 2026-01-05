import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const ProductGrid = ({ products, title }) => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 uppercase text-center sm:text-left">
                        {title}
                    </h2>
                )}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 group"
                >
                    {products.map((product) => (
                        <motion.div key={product.id} variants={item}>
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductGrid;
