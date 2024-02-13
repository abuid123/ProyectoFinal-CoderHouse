/* eslint-disable react/prop-types */
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
const ItemDetail = ({ name, price, category, image, stock, description }) => {

  return (
    <article className='flex justify-center flex-col border-black border-solid border-2 rounded-2xl w-[50%] m-auto mt-20'>
      <Link to={'/'} type="button" className="flex items-start justify-center py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2  dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
        <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        <span>Go back</span>
      </Link>
      <header>
        <h2 className="text-2xl w-[50%] m-auto text-center"><strong>{name}</strong></h2>
      </header>
      <picture className='m-auto my-0'>
        <img className="w-[300px] h-[200px] object-scale-down" src={image} alt={name} />
      </picture>
      <section className="text-center">
        <p>
          Categoria: {category}
        </p>
        <p>
          Descripcion: {description}
        </p>
        <p className='text-2xl font-bold text-green-600'>
          Precio: ${price}
        </p>
        <p className='text-2xl font-bold text-red-600'>
          Stock disponible: {stock}
        </p>
      </section>
      <footer>
        <ItemCount stock={stock} initial={1} onAdd={(quantity) => { console.log("Cantidad agregada:", quantity) }} />
      </footer>
    </article>
  )
};

export default ItemDetail;
