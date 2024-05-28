import RequestHandler from "./RequestHandler";

const componentURL = "/cart";

const createCart = async() => {
    const response = await RequestHandler.get(componentURL);
    return response.data;
}

const getCart = async(cartId) => {
    const body = {
        cartId: cartId
    }
    const response = await RequestHandler.post(componentURL, body);
    if(response.status !== 200 || !response.data){
        return null;
    }
    return response.data;
}

const addProductToCart = async(cartId, productId, quantity) => {
    const body = {
        cartId : cartId,
        productId : productId,
        quantity : quantity
    }

    const response = await RequestHandler.post(componentURL + "/product", body);
    if(response.status !== 200 || !response.data){
        return null;
    }
    return response.data;
}

const addInstallerToCart = async(cartId, installerId, province) => {
    const body = {
        cartId : cartId,
        installerId : installerId,
        province : province
    }

    const response = await RequestHandler.post(componentURL + "/installer", body);
    if(response.status !== 200 || !response.data){
        return null;
    }
    return response.data;
}

const cancelOrder = async(cartId) => {
    const body = {
        cartId : cartId
    }

    const response = await RequestHandler.put(componentURL, body);
    if(response.status !== 200 || !response.data){
        return null;
    }
    localStorage.removeItem("cart");
    return response;
}


const CartAPI = {
    createCart,
    addProductToCart,
    addInstallerToCart,
    cancelOrder,
    getCart
}

export default CartAPI;