import { useEffect } from 'react';
import { useCartContext } from '../../context/cartContext';
import CartEmpty from '../CartEmpty/CartEmpty';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCountSimple from '../ItemCountSimplified/ItemCountSimple';
import { db } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
const Cart = () => {
  const { cart, setCart, setTotalItems } = useCartContext();

  useEffect(() => {
    cart.map((item, index) => {
      if (item.quantity > item.item.stock) {
        const numeroAQuitar = item.quantity - item.item.stock
        setTotalItems(totalItems => totalItems - numeroAQuitar)
        cart[index].quantity = item.item.stock
        setCart([...cart])
        toast.info(`No hay la cantidad de stock que selecciono por eso hemos reducido la cantidad elegida`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })
  }, [cart, setCart, setTotalItems])


  const onAdd = (item, quantity) => {
    const itemInCart = cart.find(i => i.item.id == item.item.id);
    if (itemInCart) {
      itemInCart.quantity += quantity;
      setTotalItems(totalItems => totalItems + quantity)
      setCart([...cart]);
    } else {
      setTotalItems(totalItems => totalItems + quantity)
      setCart([...cart, { item, quantity }]);
    }
  }

  const onRest = (item) => {
    const itemInCart = cart.find(i => i.item.id == item.item.id);
    if (itemInCart) {
      if (itemInCart.quantity === 1) {
        return null
      }
      itemInCart.quantity -= 1;
      setTotalItems(totalItems => totalItems - 1)
      setCart([...cart]);
    }
  }

  const createOrder = () => {
    const order = {
      items: cart.map(item => ({ id: item.item.id, title: item.item.name, price: item.item.price, quantity: item.quantity })),
      total_price: cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0),
      order_date: new Date().toLocaleString()
    }
    const ordersCollection = collection(db, 'orders')
    const newOrder = { ...order }

    addDoc(ordersCollection, newOrder)
      .then((docRef) => {
        console.log("Order written with ID: ", docRef.id);
        toast.success(`Compra realizada con exito`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearCart()
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  const clearCart = () => {
    setCart([])
    setTotalItems(0)
  }

  return (
    <>
      {cart.length === 0 ? <CartEmpty /> : null}
      <div className='grid center justify-center gap-3 mt-5'>
        {cart.map((item, index) => {
          return (
            <div key={index}>
              <div className='flex border border-gray-300 bg-white w-[800px] h-[150px] items-center flex-row justify-between' >
                <img src={item.item.image} alt="product image" className='w-[64px] h-[64px] object-contain mr-10' />
                <div className='flex items-center'>
                  <div>
                    <p><strong>{item.item.name}</strong></p>
                    <p>Cantidad de items: {item.quantity}</p>
                    <button className='text-blue-600 hover:underline decoration-1' onClick={() => {
                      setTotalItems(totalItems => totalItems - item.quantity)
                      setCart(cart.filter((_, i) => i !== index))
                    }}>Eliminar</button>
                  </div>
                  <ItemCountSimple stock={item.item.stock} initial={item.quantity} onAdd={() => onAdd(item, 1)} onRest={() => onRest(item)} />
                </div>
                <div className='price mr-8'>
                  {item.quantity > 1 ? <p>${item.item.price * item.quantity}</p> : <p>${item.item.price}</p>}
                </div>
              </div>
            </div>
          )
        })}
        {cart.length === 0 ? null : <button className='h-[100px] w-[250px] rounded-lg bg-sky-600 mx-auto' onClick={createOrder}>Confirmar compra</button>}
      </div >
      <ToastContainer />
    </>
  )
};

export default Cart;
