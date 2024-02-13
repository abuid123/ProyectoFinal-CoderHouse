import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import { getProducts, getProductsByCategory } from '../../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner'
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
// import { importProducts } from '../../firebase/importProducts';
export const ItemListContainer = ({ message }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()
  // const handleClick = () => {
  //   importProducts()
  // }
  useEffect(() => {
    const productsCollection = collection(db, 'products')

    if (categoryId) {
      const queryCollection = query(productsCollection, where('categoryId', '==', categoryId))

      getDocs(queryCollection)
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map(doc => {
            console.log(doc.id)
            return { id: doc.id, ...doc.data() }
          })
          setProducts(products)
        })
    } else {
      getDocs(productsCollection)
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map(doc => {
            console.log(doc.id)
            return { id: doc.id, ...doc.data() }
          })
          console.log(products)
          setProducts(products)
        })
    }
    // const asyncFunc = categoryId ? getProductsByCategory : getProducts

    // asyncFunc(categoryId)
    //   .then(products => setProducts(products))
    //   .catch(error => console.log(error));
  }, [categoryId])

  return (
    <div>
      {/* <button onClick={handleClick} className='bg-sky-500 p-2 rounded-2xl text-lg hover:bg-sky-400 hover:shadow-lg ease-in duration-200'>TOCAME</button> */}
      <h1 className='text-[50px] text-center mb-2'>{message}</h1>
      {products.length == 0 ? <Spinner /> : <ItemList products={products} />}
    </div>

  );
};

ItemListContainer.propTypes = {
  message: PropTypes.string,
};