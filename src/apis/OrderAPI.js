import RequestHandler from "./RequestHandler";

const componentURL = "/order";

const placeOrder = async(cartId, token, customerInfo) => {
    const body = {
        cartId : cartId,
        ...customerInfo
    }

    const response = await RequestHandler.post(componentURL, body, {
        headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    if(response.status !== 200 || !response.data){
        return null;
    }
    localStorage.removeItem("cart");
    return response;
}

const getOrderHistory = async(token) => {
    const response = await RequestHandler.get(componentURL, {
        headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    if(response.status !== 200 || !response.data){
        return null;
    }
    return response;
}

const getOrderDetails = async(orderId, token) => {
    const response = await RequestHandler.post(componentURL + `/${orderId}`, null, {
        headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
    return response;
}

const OrderAPI = {
    placeOrder,
    getOrderHistory,
    getOrderDetails
}

export default OrderAPI;