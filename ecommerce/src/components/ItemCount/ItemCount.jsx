/* eslint-disable react/prop-types */
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="mx-auto w-[300px] p-[10px] shadow-md shadow-black rounded-lg mt-[80px]">
      <div className='flex flex-col items-center justify-center'>
        <h4 className="text-2xl text-center">{quantity}</h4>
        <div>
          <button className="bg-sky-600 text-white w-[100px] rounded m-4 h-[50px] shadow-sm shadow-black" onClick={decrement}> - </button>
          <button className="bg-sky-600 text-white w-[100px] rounded m-4 h-[50px] shadow-sm shadow-black" onClick={increment}> + </button>
        </div>
        <div>
          <button disabled={!stock} className="bg-slate-400 rounded-lg p-1 shadow-sm shadow-black" onClick={() => onAdd(quantity)}>
            <span>Agregar al carrito</span>
          </button>
        </div>
      </div>
    </div>
  )
};

export default ItemCount;
