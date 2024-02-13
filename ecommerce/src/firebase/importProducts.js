import { db } from './config';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import { products } from '../../asyncMock';

export const importProducts = async () => {
  const productsCollection = collection(db, 'products');

  products.forEach((product) => {
    console.log(product)
    addDoc(productsCollection, product).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    }).catch((error) => {
      console.error('Error adding document: ', error);
    });
  })
}