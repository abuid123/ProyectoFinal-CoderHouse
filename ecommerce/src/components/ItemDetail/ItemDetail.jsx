/* eslint-disable react/prop-types */
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ name, price, category, image, stock, description }) => {
  return (
    <article className='flex justify-center flex-col border-black border-solid border-2 rounded-2xl w-[50%] m-auto mt-20'>
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
        <p>
          Precio {price}
        </p>
        <p>
          Stock disponible: {stock}
        </p>
      </section>
      <footer>
        <ItemCount stock={10} initial={1} onAdd={(quantity) => { console.log("Cantidad agregada:", quantity) }} />
      </footer>
    </article>
  )
};

export default ItemDetail;
