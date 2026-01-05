import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/ui/ProductGrid';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
    const { products } = useProducts();
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category') || 'all';
    const searchParam = searchParams.get('search') || '';

    const activeCategory = categoryParam;

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchParam.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // State for pagination
    const [visibleProducts, setVisibleProducts] = useState(12);

    // Track previous category/search to reset visibility during render
    const [prevFilter, setPrevFilter] = useState({ cat: categoryParam, search: searchParam });
    if (categoryParam !== prevFilter.cat || searchParam !== prevFilter.search) {
        setPrevFilter({ cat: categoryParam, search: searchParam });
        setVisibleProducts(12);
    }

    const handleLoadMore = () => {
        setVisibleProducts(prev => prev + 12);
    };

    const categories = ['all', 'curtains', 'wallpapers'];

    return (
        <div className="min-h-screen bg-off-white pt-8 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight uppercase mb-4">
                        {activeCategory === 'all' ? 'All Products' : activeCategory}
                    </h1>
                    {searchParam && <p>Search results for "{searchParam}"</p>}
                    <p className="text-gray-500 max-w-2xl mx-auto mt-2">
                        Explore our extensive collection of premium curtains and wallpapers designed to elevate your living space.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-black pb-2 flex items-center justify-between">
                                    Category <ChevronDown size={14} />
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {categories.map(cat => (
                                        <li key={cat}>
                                            <a
                                                href={`/shop${cat === 'all' ? '' : `?category=${cat}`}`}
                                                className={`hover:text-black transition-colors ${activeCategory === cat ? 'text-black font-semibold' : ''}`}
                                            >
                                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-black pb-2 flex items-center justify-between">
                                    Material <ChevronDown size={14} />
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {['Velvet', 'Linen', 'Cotton', 'Silk', 'Polyester'].map(mat => (
                                        <li key={mat} className="flex items-center gap-2">
                                            <input type="checkbox" id={mat} className="rounded-none border-gray-300 focus:ring-black" />
                                            <label htmlFor={mat} className="hover:text-black cursor-pointer">{mat}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="mb-6 flex justify-between items-center text-sm text-gray-500">
                            <p>Showing {Math.min(visibleProducts, filteredProducts.length)} of {filteredProducts.length} results</p>
                            <button className="flex items-center gap-2 hover:text-black">
                                Sort by: Newest <ChevronDown size={14} />
                            </button>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <>
                                <ProductGrid products={filteredProducts.slice(0, visibleProducts)} />

                                {visibleProducts < filteredProducts.length && (
                                    <div className="mt-12 text-center">
                                        <button
                                            onClick={handleLoadMore}
                                            className="inline-block px-12 py-3 border border-black text-black font-medium tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                                        >
                                            LOAD MORE
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20 text-gray-500">
                                No products found matching your criteria.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
