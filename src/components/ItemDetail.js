import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState} from 'react';
import ItemCount from './ItemCount';
import Checkout from './Checkout';
import { CartContext } from './CartContext';

const Item = ({ items }) => {

    const divStyle = {
        margin: '0',
        width: '500px',
        height: 'auto',
      };
    
    const [itemCount, setItemCount] = useState(0);

    const test = useContext(CartContext)

    const onAdd = (qty) => {
        alert("You have selected " + qty + " item.");
        setItemCount(qty);
        test.funcionGlobarAddtoCard(items);
    }
       
    return (
    <>
    {
        items.image
        ? 

        <div className="card">
           <tr> 
                <td>
                    <img src={items.image} className="card-img-top" alt="Course" style={divStyle}/>
                </td>
                <td class="align-top text-start">
                    <div className="card-body" >
                        <h5 className="card-title">{items.name}</h5>
                        <p className="card-text">{items.description}</p>
                    </div>

                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item">Precio: ${items.cost}</li>
                        <li className="list-group-item">Duracion: {items.Duration}</li>
                        <li className="list-group-item">Fecha de Inicio: {items.initialDate}</li>
                        <li className="list-group-item">Capacidad: {items.stock}</li>

                    </ul>
                    <div className="card-body" >
                    {
                        itemCount === 0
                        ? <ItemCount stock={items.stock} initial={itemCount} onAdd={onAdd} />
                        : <Checkout />
                    }      
                    </div>         
                </td>
                
            </tr>
        </div>
        : <p>Cargando...</p>
    }
    </>

);

};

export default Item;