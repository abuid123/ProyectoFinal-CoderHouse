import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from '../../firebase/config';
import { collection, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { itemId } = useParams()
  useEffect(() => {

    const productsCollection = collection(db, 'products')

    const refDoc = doc(productsCollection, itemId)
    getDoc(refDoc)
      .then((doc) => {
        setProduct({ ...doc.data() })
      })
    // getProductById(itemId)
    //   .then(response => {
    //     setProduct(response)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
  }, [itemId])

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
};

export default ItemDetailContainer;
