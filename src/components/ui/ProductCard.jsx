import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="group relative">
            <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100 relative">
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                </Link>
                {/* Quick Add Button */}
                <button
                    className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                    aria-label="Add to cart"
                >
                    <Plus size={20} />
                </button>
                {/* Badge example */}
                {product.isNew && (
                    <span className="absolute top-2 left-2 bg-black text-white text-[10px] uppercase font-bold px-2 py-1 tracking-widest">
                        New
                    </span>
                )}
            </div>
            <div className="mt-4 flex justify-between items-start">
                <div>
                    <h3 className="text-sm font-medium text-gray-900">
                        <Link to={`/product/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 capitalize">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹{product.price.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default ProductCard;
