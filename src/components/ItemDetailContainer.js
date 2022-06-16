import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../utils/firestoreFetch";



const ItemDetailContainer = () => {

const [dato, setDato] = useState([]);

const { id } = useParams();

useEffect(() => {

firestoreFetchOne(id)

.then(result => setDato(result))

.catch(err => console.log(err));

}, [id]);

console.log(dato)

return (

<> <ItemDetail item={dato} />

</>

);

}

export default ItemDetailContainer;

