import Item from "../Item/Item";
import "./ItemList.css";
/* eslint-disable react/prop-types */
const ItemList = ({ products }) => {
  return (
    <div className="listItems h-[500px]">
      {products.map(product => <Item key={product.id} {...product} />)}
    </div>
  )
};

export default ItemList;
