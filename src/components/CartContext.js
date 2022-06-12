import { createContext, useState } from "react";

export const CartContext = createContext();


const CartContextP = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image[0],
                    nameItem: item.name,
                    costItem: item.cost,
                    qtyItem: qty
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty;
        }
    }
    
    const borrarTodo = () => {
        setCartList([]);
    }

    const borrarItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    const caclTotal = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => caclTotal(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcImpuestos = () => {
        return calcSubTotal() * 0.18;
    }

    const precioFinal = () => {
        return calcSubTotal() + calcImpuestos();
    }

    const calcularItems = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            borrarTodo, 
            borrarItem, 
            caclTotal, 
            calcSubTotal, 
            calcImpuestos, 
            precioFinal,
            calcularItems
        }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextP;