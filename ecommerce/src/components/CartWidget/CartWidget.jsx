import cart from './assets/cart.svg';
import './CartWidget.css';
import { useCartContext } from '../../context/cartContext';
export const CartWidget = () => {
  const { totalItems } = useCartContext();
  return (
    <>
      <div>
        <img src={cart} alt="cart-widget" className='cart' />
        <span className='numeroWidget'>{totalItems}</span>
      </div>
    </>
  );
};

