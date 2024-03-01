import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner'
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = ({ message }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    const productsCollection = collection(db, 'products')

    if (categoryId) {
      const queryCollection = query(productsCollection, where('categoryId', '==', categoryId))

      getDocs(queryCollection)
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
          })
          setProducts(products)
        })
    } else {
      getDocs(productsCollection)
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
          })
          setProducts(products)
        })
    }
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