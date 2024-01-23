import { useState } from "react";

export const useItemCount = (initial = 0, stock) => {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return { quantity, increment, decrement }
}

