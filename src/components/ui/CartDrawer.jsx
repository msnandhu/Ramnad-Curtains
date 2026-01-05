import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useProducts();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl z-[70] flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold uppercase tracking-wide">Your Cart ({cart.length})</h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="text-center py-20">
                                    <p className="text-gray-500 mb-6">Your cart is empty.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-black font-semibold border-b border-black hover:text-gray-600 hover:border-gray-600 transition-colors"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                                        <div className="w-20 h-24 bg-gray-100 flex-shrink-0 overflow-hidden">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h3 className="font-medium text-sm pr-4 line-clamp-2">{item.name}</h3>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.variant)}
                                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1">Size: {item.variant}</p>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center border border-gray-200">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.variant, -1)}
                                                        className="p-1 hover:bg-gray-50"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="px-2 text-xs font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.variant, 1)}
                                                        className="p-1 hover:bg-gray-50"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <p className="font-medium text-sm">₹{(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-6 border-t border-gray-100 bg-gray-50">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-medium text-gray-600">Subtotal</span>
                                    <span className="text-lg font-bold">₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-6">Tax included. Shipping calculated at checkout.</p>
                                <Link
                                    to="/checkout"
                                    onClick={() => setIsCartOpen(false)}
                                    className="block w-full bg-black text-white text-center py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                                >
                                    Checkout
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
