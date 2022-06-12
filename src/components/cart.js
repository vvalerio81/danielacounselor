import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const test = useContext(CartContext);


    return (
        <>
         <h1>Tu Carrito</h1>

            {
            (test.cartList.length) > 0 
            ?<button type="button" className="btn btn-primary" onClick={test.borrarTodo}>Eliminar todo</button>                
            :<><p>El carrito esta Vacio</p>
            <Link to="/">Seguir comprando</Link>
            </>
            }

            {
            test.cartList.length > 0 &&
            test.cartList.map(item =>
                <>
                <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Nombre: {item.nameItem}</li>
                    <li className="list-group-item">Precio: {item.costItem}</li>
                    <li className="list-group-item">Cantidad: {item.qtyItem}</li>
                </ul>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary" onClick={() => test.borrarItem(item.idItem)}>Borrar Item</button>                
                    </div>
                </div>
            </>)
            }
            {
            test.cartList.length > 0 &&
                <>
                <div className="card">
                <h2>Total a Pagar</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Subtotal: {test.calcSubTotal()}</li>
                    <li className="list-group-item">Impuestos: {test.calcImpuestos()}</li>
                    <li className="list-group-item">Total: {test.precioFinal()}</li>
                </ul>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary">Pagar</button>                
                    </div>
                </div>
            </>
            }
        </>
    );
}

export default Cart;