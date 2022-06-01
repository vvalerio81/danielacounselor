import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './ItemDetail';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { products } = require('../utils/products');


const ItemDetailContainer = ({greeting}) => {

    const [dato, setDato] = useState([]);
    const {id} =useParams();

    useEffect(() => {
        customFetch(2000, products.find ( item => item.id === parseInt(id)) )
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [id]);


    return(
        <div>
        <h1> {greeting} </h1>
        <ItemDetail  items={dato} />
        </div>
    );
};

export default ItemDetailContainer;