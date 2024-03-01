# Ecommerce de Agustin Fernandez

Hola! En este documento se va a tratar de documentar de manera muy breve y concisa esta app.

- List item

Para empezar quiero dejar aclarado que:

 1. Se uso Tailwind para los estilos.
 2. React-toastify para las notificaciones a la hora de agregar un producto al carrito y al llegar al limite en el carrito de stock y querer seguir agregando y al finalizar la compra.

Se utilizaron todos los temas vistos en clases (useEffect, firebase, renderizado condicional, context, etc).

Se agregaron validaciones para evitar errores con el agregado o restar productos. Por ej: Al darle al "+" en el contador de un producto una vez llega al limite de stock no puede seguir siendo clickeado, lo mismo con el "-".

Encontre tambien que ademas de eso si yo, me movia de categoria y volvia al mismo producto podia volver a sumar otros por ej 10 items del mismo producto que anteriormente habia llegado al limite, se agrego esa validacion tambien.

ItemCount y ItemCountSimplified. Quiza esto se pudo hacer de una mejor manera. Cumplen mas o menos la misma funcion, la diferencia esta en que el simplificado no tiene opcion de agregar al carrito porque es el contador que se muestra en el mismo carrito para ir agregando mas items si se quiere desde esa vista.

Al agregar desde el carrito mas items del mismo se tiene en cuenta y se actualiza sus valores (precio, cantidad, el widget del carrito, etc).
