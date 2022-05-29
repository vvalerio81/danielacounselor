import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';


const Item = ({ items }) => {

    const divStyle = {
        margin: '0',
        width: '500px',
        height: 'auto',
      };
    
       
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
                    <ItemCount stock={items.stock} initial={0} />
                </td>
                
            </tr>
        </div>
        : <p>Cargando...</p>
    }
    </>

);

};

export default Item;