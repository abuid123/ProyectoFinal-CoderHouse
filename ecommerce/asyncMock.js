import macbook from './src/images/macbook-removebg-preview.png'
import iphone12 from './src/images/iphone_12-removebg-preview.png'
import iphone13 from './src/images/png-transparent-ipad-pro-12-9-inch-2nd-generation-apple-a10x-ipad-electronics-gadget-mobile-phone-removebg-preview.png'
const products = [
  {
    id: 1, name: 'Iphone 12', price: 1200, category: 'smartphone', categoryId: 1, image: iphone12,
    stock: 25, description: 'The best smartphone in the world'
  },
  {
    id: 2, name: 'iPad', price: 1500, category: 'tablet', categoryId: 2, image: iphone13,
    stock: 15, description: 'The most expensive tablet in the world'
  },
  {
    id: 3, name: 'Macbook Pro', price: 2500, category: 'laptop', categoryId: 3, image: macbook, stock: 5, description: 'The best laptop in the world'
  },

]

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id == id))
    }, 500)
  })
}

export const getProductsByCategory = async (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.categoryId == categoryId))
    }, 500)
  })
}