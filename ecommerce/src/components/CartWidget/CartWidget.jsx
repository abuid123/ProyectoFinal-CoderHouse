import cart from './assets/cart.svg';
import './CartWidget.css';
export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="cart-widget" className='cart' />
      <span className='numeroWidget'>0</span>
    </>
  );
};

