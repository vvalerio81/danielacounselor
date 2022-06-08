import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const test = useContext(CartContext);


    return (
        <>
            {
            test.cartList.length === 0 
            ?<p>El carrito esta Vacio</p>
            : test.cartList.map((items) =>
            <>
            <p>Nombre: {items.name}</p>
            <p>Precio: {items.cost}</p>
            <p>Cantidad{items.qtyItem}</p>
            <button type="button" class="btn btn-primary" onClick={() => test.deleteItem(items.id)}>Borrar Item</button></>)
            }
        </>
    );
}

export default Cart;