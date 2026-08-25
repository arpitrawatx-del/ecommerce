import { createContext, useContext, useCallback } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useLocalStorage("cart", []);

    const addToCart = useCallback((product) => {
        setCartItems((prev) => {
            const item = prev.find((item) => item.id === product.id);

            if (item) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: Math.min(item.quantity + 1, 5) }
                        : item
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    }, [setCartItems]);

    const removeFromCart = useCallback((id) => {
        setCartItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    }, [setCartItems]);

    const updateQuantity = useCallback((id, quantity) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, Math.min(quantity, 5)) }
                    : item
            )
        );
    }, [setCartItems]);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, [setCartItems]);

    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }

    return context;
}
