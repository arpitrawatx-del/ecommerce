import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="dark:bg-slate-900 min-h-screen">
            {/* Hero Section */}
            <div className="relative dark:bg-slate-900 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Welcome to Electronic Shopping
                    </h1>
                    <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Discover the latest electronics at unbeatable prices. From smartphones to laptops, we have everything you need.
                    </p>
                    <Link
                        to="/Product"
                        className="inline-block bg-white text-indigo-600 dark:bg-slate-800 dark:text-indigo-100 dark:hover:bg-slate-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Quality Products</h3>
                        <p className="text-gray-600 dark:text-gray-300">We offer only the best electronics from top brands worldwide.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Best Prices</h3>
                        <p className="text-gray-600 dark:text-gray-300">Competitive pricing with regular deals and discounts.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Fast Delivery</h3>
                        <p className="text-gray-600 dark:text-gray-300">Quick and reliable shipping to your doorstep.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
