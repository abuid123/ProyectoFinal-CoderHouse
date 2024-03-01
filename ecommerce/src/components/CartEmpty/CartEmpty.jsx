const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <h2>¡Empieza un carrito de compras!</h2>
        <p>Actualmente no tienes productos en el carrito de compras.</p>
        <p>Añade productos al carrito para continuar con la compra.</p>
      </div>
    </div>
  )
};

export default CartEmpty;