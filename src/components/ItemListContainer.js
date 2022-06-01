import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { products } = require('../utils/products');


const ItemListContainer = ({greeting}) => {

    const [datos, setDatos] = useState([]);
    const {id} = useParams();

    
    useEffect(() => { id === undefined
        ? customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))

        : customFetch(2000, products.filter(item => item.categoryId === parseInt(id)))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [id]);


    return(
        <div>
        <h1> {greeting} </h1>
        <ItemList items={datos} />
        </div>
    );
};

export default ItemListContainer;