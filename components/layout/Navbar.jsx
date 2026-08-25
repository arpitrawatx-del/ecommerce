import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
    const { wishlistItems } = useWishlist();
    const { totalItems } = useCart();
    const { darkMode, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        logout();
        navigate("/");
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg p-4 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-white hover:text-indigo-200 transition-colors">
                    Electronic Shopping
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link to="/" className="text-indigo-100 hover:text-white transition-colors font-medium">
                        Home
                    </Link>
                    <Link to="/Product" className="text-indigo-100 hover:text-white transition-colors font-medium">
                        Products
                    </Link>
                    <Link to="/Cart" className="text-indigo-100 hover:text-white transition-colors font-medium">
                        Cart {totalItems>0&&`(${totalItems})`}
                    </Link>
                    <Link to="/Wishlist" className="text-indigo-100 hover:text-white transition-colors font-medium">
                        Wishlist {wishlistItems.length > 0 && `(${wishlistItems.length})`}
                    </Link>
                    {user ? (
                        <>
                            <span className="text-indigo-100 font-medium">
                                Hi, {user.name}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="text-indigo-100 hover:text-white transition-colors font-medium px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/Login" className="text-indigo-100 hover:text-white transition-colors font-medium">
                            Login
                        </Link>
                    )}
                    <button
                        onClick={toggleTheme}
                        className="text-indigo-100 hover:text-white transition-colors font-medium px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-indigo-200 transition-colors"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 pt-4 border-t border-white/20">
                    <div className="flex flex-col gap-4">
                        <Link 
                            to="/" 
                            className="text-indigo-100 hover:text-white transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/Product" 
                            className="text-indigo-100 hover:text-white transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Products
                        </Link>
                        <Link 
                            to="/Cart" 
                            className="text-indigo-100 hover:text-white transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Cart {totalItems>0&&`(${totalItems})`}
                        </Link>
                        <Link 
                            to="/Wishlist" 
                            className="text-indigo-100 hover:text-white transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Wishlist {wishlistItems.length > 0 && `(${wishlistItems.length})`}
                        </Link>
                        {user ? (
                            <>
                                <span className="text-indigo-100 font-medium">
                                    Hi, {user.name}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="text-indigo-100 hover:text-white transition-colors font-medium text-left"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link 
                                to="/Login" 
                                className="text-indigo-100 hover:text-white transition-colors font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Login
                            </Link>
                        )}
                        <button
                            onClick={() => {
                                toggleTheme();
                                setIsMobileMenuOpen(false);
                            }}
                            className="text-indigo-100 hover:text-white transition-colors font-medium text-left"
                        >
                            {darkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
