import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemCount = ({stock,initial, onAdd}) => {


    const [cantidad, setCantidad] = useState(initial);

    const increment = () => {

        if (cantidad<(stock)) setCantidad(cantidad+1);

    }

    const decrease = () => {

        if (cantidad>(initial)) setCantidad(cantidad-1)

    }

    const agregar = () =>{
        if (cantidad !== 0) alert(`Agregaste ${cantidad} items`);
        else alert(`No hay stock`);
        
    }

    return(
        <>
        <div>
            <tr>
                <td className="celdas"><button onClick={decrease} > - </button></td>
                <td className="celdas"> <p> {cantidad} </p></td>
                <td className="celdas"><button onClick={increment} > + </button></td>
             </tr>
        </div>
        <div>
        {
            stock && cantidad
            ?<button type="button" onClick={() => onAdd(cantidad)} className="btn btn-primary">Agregar al Carrito</button>
            :<button type="button" onClick={agregar} class="btn btn-primary">Agregar al Carrito</button>
        }
        </div>
        </>

    );


};

export default ItemCount;