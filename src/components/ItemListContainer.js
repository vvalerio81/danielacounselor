import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
const { products } = require('../utils/products');


const ItemListContainer = ({greeting}) => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);


    return(
        <div>
        <h1> {greeting} </h1>
        <ItemList items={datos} />
        </div>
    );
};

export default ItemListContainer;