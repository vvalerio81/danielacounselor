import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="d-flex justify-content-between">
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} description={item.description} durations={item.duration} initialDate={item.initialDate} />)
            : <p>Cargando...</p>
        }
        </div>
    );
}

export default ItemList;