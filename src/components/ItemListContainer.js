import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { categoryId } = useParams();

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(categoryId)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [categoryId]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
            <ItemList items={datos} />
    );
}

export default ItemListContainer;