import 'bootstrap/dist/css/bootstrap.min.css';


const Item = ({ title, description, price, pictureUrl, duration, initialDate}) => {

    const divStyle = {
        margin: '40px',
        border: '5px solid pink',
        width: '300px',
        height: 'auto',
      };
       
    return (
    <>

        <div className="card" style={divStyle}>
            <img src={pictureUrl} class="card-img-top" alt="Course"/>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${price}</li>
                    <li className="list-group-item">Duracion: {duration}</li>
                    <li className="list-group-item">Fecha de Inicio: {initialDate}</li>
                </ul>
            <div className="card-body">
                <a href="https://www.google.com/" className="card-link">mas detalles...</a>
            </div>

        </div>
    </>

);

};

export default Item;