import { useEffect, useReducer, createContext } from "react";

// API
import CartAPI from "../../apis/CartAPI";

const initialState =
{
    cartId: JSON.parse(localStorage.getItem("cart")),
    product: null,
    quantity: 0,
    category: "",
    province: "",
    installer: null
}

const cartReducer = (state, action) => {
    switch(action.type){
        case 'set_cart':
            return {
                ...action.cart
            }
        case 'add_product':
            return {
                ...state,
                product: action.product,
                quantity: action.quantity,
                province: "",
                installer: null
            }
        case 'set_province':
            return {
                ...state,
                province: action.province,
                installer: (action.province === state.province && state.installer !== null) ? {...state.installer} : null
            }
        case 'add_installer':
            return {
                ...state,
                installer: action.installer
            }
        case 'cancel_order':
            return {
                cartId: null,
                product: null,
                quantity: 0,
                category: "",
                province: "",
                installer: null
            }
        default:
            return state;
    }
}

export const orderCartContext = createContext();

const OrderCartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        if(state.cartId !== null && state.cartId !== undefined) {
            localStorage.setItem("cart", JSON.stringify(state.cartId));
        }
        else{
            localStorage.removeItem("cart");
        }
    }, [state.cartId]);

    useEffect(() => {
        if(state.cartId === undefined || state.cartId === null){
            return;
        }
        (async() => {
            const result = await CartAPI.getCart(state.cartId);
            dispatch({
                type: 'set_cart',
                cart: result
            });
        })();
    }, []);

    return (
        <orderCartContext.Provider value={{state, dispatch}}>
            {children}
        </orderCartContext.Provider>
    )
}

export default OrderCartContextProvider;
