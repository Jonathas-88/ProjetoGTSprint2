import { createContext, useState } from "react"

 const CartContext = createContext()

 const CartProvider = ({children}) => {
    const [count, setCount] = useState(1)

    function addToCart(){
        setCount((count) => count + 1)
    }
    function removeFromCart(){
        setCount((count) => count - 1)
    }
    function removeItem(){
        setCount(0)
    }
    return (
    <>
    <CartContext.Provider value={{count, addToCart, removeFromCart, removeItem}}>
        {children}
    </CartContext.Provider>
    </>
  )
}

export {CartContext, CartProvider}
