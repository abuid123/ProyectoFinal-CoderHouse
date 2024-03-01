/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

//create context devuelve 2 componentes provider y consumer
// provider es el componente que va a envolver a toda la aplicacion
// consumer es el componente que va a consumir el contexto

export const useCartContext = () => {
  return useContext(CartContext);
}

const { Provider } = CartContext;
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const addItem = (item, quantity) => {
    setTotalItems(totalItems + quantity);
    const itemIndex = cart.findIndex(i => i.item.id === item.id);
    if (itemIndex === -1) {
      setCart([...cart, { item, quantity }]);
    } else {
      const newCart = [...cart];
      newCart[itemIndex].quantity += quantity;
      setCart(newCart);
    }
  }

  const contextValue = { cart, totalItems, addItem, setCart, setTotalItems }

  return (
    <Provider value={contextValue}>
      {children}
    </Provider>
  )
}

export default CartProvider;
