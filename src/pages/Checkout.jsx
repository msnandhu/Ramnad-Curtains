import React from 'react';
import { useProducts } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cart, cartTotal } = useProducts();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-off-white flex flex-col items-center justify-center p-4">
                <h1 className="text-3xl font-bold mb-4">Cart is Empty</h1>
                <Link to="/shop" className="text-black border-b border-black">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-off-white pt-12 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight uppercase mb-10 text-center">Checkout</h1>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Form */}
                    <div className="flex-1 bg-white p-8 shadow-sm">
                        <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full border-gray-300 p-3 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-black" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full border-gray-300 p-3 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-black" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                <input type="text" className="w-full border-gray-300 p-3 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-black" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                    <input type="text" className="w-full border-gray-300 p-3 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-black" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                                    <input type="text" className="w-full border-gray-300 p-3 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-black" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                                    <input type="text" className="w-full border-gray-300 p-3 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-black" />
                                </div>
                            </div>

                            <div className="pt-6">
                                <h2 className="text-xl font-bold mb-6">Payment</h2>
                                <div className="p-4 border border-gray-200 bg-gray-50 text-sm text-gray-500">
                                    Payment integration coming soon.
                                </div>
                            </div>

                            <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                                Access Checkout
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-96 bg-white p-8 shadow-sm h-fit">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                            {cart.map((item) => (
                                <div key={`${item.id}-${item.variant}`} className="flex gap-4 text-sm">
                                    <div className="w-16 h-20 bg-gray-100 flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-gray-500">Size: {item.variant}</p>
                                        <p className="text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                    <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹{cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="border-t border-gray-100 pt-4 mt-4">
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span>₹{cartTotal.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
