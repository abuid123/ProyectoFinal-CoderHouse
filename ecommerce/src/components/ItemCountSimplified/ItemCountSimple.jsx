/* eslint-disable react/prop-types */
import { useItemCount } from "../../hooks/useItemCount";
import './ItemCountSimple.css'
const ItemCountSimple = ({ stock, initial, onAdd, onRest }) => {
  const { quantity, increment, decrement } = useItemCount(initial, stock)

  const handleChange = (e) => {
    console.log(e)
    if (e.target.value <= stock) {
      onAdd(e.target.value)
    }
  }

  const handleClickOnAdd = () => {
    onAdd()
    increment()
  }

  const handleClickOnRest = () => {
    onRest()
    decrement()
  }

  return (
    <div className="mx-auto w-[300px] p-[10px] rounded-lg mt-[50px] mb-8 ml-8">
      {/* <div className='flex flex-col items-center justify-center'>
        <h4 className="text-2xl text-center">{quantity}</h4>
        <div>
          <button className="bg-sky-600 text-white w-[100px] rounded m-4 h-[50px] shadow-sm shadow-black" onClick={onRest}> - </button>
          <button className="bg-sky-600 text-white w-[100px] rounded m-4 h-[50px] shadow-sm shadow-black" onClick={onAdd}> + </button>
        </div>
      </div> */}

      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" onClick={handleClickOnRest}>
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700" name="custom-input-number" value={quantity} onChange={handleChange}></input>
        <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" onClick={handleClickOnAdd}>
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div >
  )
};

export default ItemCountSimple;