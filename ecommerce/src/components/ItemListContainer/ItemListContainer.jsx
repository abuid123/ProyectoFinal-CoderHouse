import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner'

export const ItemListContainer = ({ message }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
      .then(products => setProducts(products))
      .catch(error => console.log(error));
  }, [categoryId])

  return (
    <div>
      <h1 className='text-[50px] text-center mb-2'>{message}</h1>
      {products.length == 0 ? <Spinner /> : <ItemList products={products} />}
    </div>

  );
};

ItemListContainer.propTypes = {
  message: PropTypes.string,
};