/* eslint-disable react/prop-types */
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, price, category, image, stock, description }) => {
  return (
    <article>
      <header>
        <h2 className="text-2xl"><strong>{name}</strong></h2>
      </header>
      <picture>
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
