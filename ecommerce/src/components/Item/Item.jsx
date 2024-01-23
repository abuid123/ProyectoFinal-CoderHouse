import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Item = ({ id, name, price, image, stock }) => {
  return (
    <article className="border-black border-solid border-2 rounded-2xl flex flex-col justify-center items-center h-full">
      <header>
        <h2 className="text-2xl"><strong>{name}</strong></h2>
      </header>
      <picture>
        <img className="w-[300px] h-[200px] object-scale-down" src={image} alt={name} />
      </picture>
      <section className="text-center mb-5">
        <p>
          Precio {price}
        </p>
        <p>
          Stock disponible: {stock}
        </p>
      </section>
      <footer>
        <Link to={`/item/${id}`} className="bg-sky-500 p-2 rounded-2xl text-lg hover:bg-sky-400 hover:shadow-lg ease-in duration-200">Ver Detalle</Link>
      </footer>
    </article>
  )
};

export default Item;
