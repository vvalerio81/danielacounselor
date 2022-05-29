import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './ItemDetail';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
const { products } = require('../utils/products');


const ItemDetailContainer = ({greeting}) => {

    const [dato, setDato] = useState([]);

    useEffect(() => {
        customFetch(2000, products[2])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);


    return(
        <div>
        <h1> {greeting} </h1>
        <ItemDetail  items={dato} />
        </div>
    );
};

export default ItemDetailContainer;