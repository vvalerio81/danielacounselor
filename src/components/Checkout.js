import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Checkout = () => {
    return (
        <button type="button" className="btn btn-primary">
        <Link to='/cart' style={{textDecoration: "none", color:'white'}}>CheckOut</Link>
        </button>
        );
    }
    
    export default Checkout;