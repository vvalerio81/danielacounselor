import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState} from 'react';
import ItemCount from './ItemCount';
import Checkout from './Checkout';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {

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
        test.addToCart(item, qty);
    }
       
    console.log(item.image);
    return (
    <>
    {
        item.image
        ? 

        <div className="card">
           <tr> 
                <td>
                    <img src={item.image} className="card-img-top" alt="Course" style={divStyle}/>
                </td>
                <td class="align-top text-start">
                    <div className="card-body" >
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                    </div>

                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item">Precio: ${item.cost}</li>
                        <li className="list-group-item">Duracion: {item.duration}</li>
                        <li className="list-group-item">Fecha de Inicio: {item.initialDate}</li>
                        <li className="list-group-item">Capacidad: {item.stock}</li>

                    </ul>
                    <div className="card-body" >
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
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

export default ItemDetail;