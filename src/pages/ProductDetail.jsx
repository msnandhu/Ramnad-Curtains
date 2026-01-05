import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { Minus, Plus, Heart } from 'lucide-react';
import ProductGrid from '../components/ui/ProductGrid';

const ProductDetail = () => {
    const { id } = useParams();
    const { getProductById, getProductsByCategory, addToCart } = useProducts();

    // Derive product directly from context
    const product = getProductById(id);

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('Standard');

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);

    return (
        <div className="min-h-screen bg-white pt-10 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-8 lowercase">
                    <Link to="/" className="hover:text-black">home</Link> /
                    <Link to="/shop" className="hover:text-black"> shop</Link> /
                    <span className="text-black ml-1">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Placeholder for more images */}
                            <div className="aspect-square bg-gray-100"></div>
                            <div className="aspect-square bg-gray-100"></div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">{product.name}</h1>
                        <p className="text-xl font-medium text-gray-900 mb-6">₹{product.price.toLocaleString()}</p>

                        <div className="prose prose-sm text-gray-500 mb-8">
                            <p>{product.description}</p>
                        </div>

                        {/* Variants */}
                        <div className="mb-8">
                            <h3 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wider">Size</h3>
                            <div className="flex space-x-3">
                                {['Standard', 'Large', 'Extra Large'].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border text-sm font-medium transition-colors ${selectedSize === size
                                                ? 'border-black bg-black text-white'
                                                : 'border-gray-200 text-gray-900 hover:border-black'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <div className="flex items-center border border-gray-200 w-32 justify-between">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="p-3 hover:bg-gray-50"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="text-sm font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="p-3 hover:bg-gray-50"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                            <button
                                onClick={() => addToCart(product, quantity, selectedSize)}
                                className="flex-1 bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                            >
                                Add to Cart
                            </button>
                            <button className="p-3 border border-gray-200 hover:border-black transition-colors">
                                <Heart size={20} />
                            </button>
                        </div>

                        {/* Details Accordion (Mock) */}
                        <div className="border-t border-gray-200 pt-6">
                            <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-600">
                                <span className="font-medium text-black">Material:</span> {product.specs.material}
                                <span className="font-medium text-black">Color:</span> {product.specs.color}
                                <span className="font-medium text-black">Origin:</span> {product.specs.origin}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-24 border-t border-gray-100 pt-16">
                    <ProductGrid products={relatedProducts} title="You Might Also Like" />
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;
