import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    // find productToAdd in 'cartItems'
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    // if found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    // else add productToAdd to 'cartItems'
    // return new array with modified cartItems/ new cart items
    //[{...productToAdd, quantity: 1}]
    return [...cartItems, { ...productToAdd, quantity: 1 }];
} 

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}