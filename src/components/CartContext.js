import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, SetCarList] = useState ([]);

    const funcionGlobarAddtoCard = (item) => {
        SetCarList([
            ...cartList,item
        ]);

    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.id !== id);
        SetCarList(result);
    }
    

    return(
        <CartContext.Provider value={{cartList, funcionGlobarAddtoCard, deleteItem}}>
            {children}
        </CartContext.Provider>

    );
    }
    export default CartContextProvider;