import RequestHandler from './RequestHandler';

const componentURL = 'Product';

const getProducts = async () => {
  const response = await RequestHandler.get(componentURL);
  return response.data;
};

const getProductsByName = async filterName => {
  let url = componentURL + '/byName/';

  if (filterName && filterName.trim() !== '') {
    url += filterName;
  } else {
    return getProducts();
  }

  const response = await RequestHandler.get(url);
  return response.data;
};

const getProductsByPrice = async (minPrice, maxPrice) => {
  const response = await RequestHandler.get(`${componentURL}/byPrice`, {
    params: { minPrice, maxPrice },
  });
  return response.data;
};

const getProduct = async productId => {
  const response = await RequestHandler.get(componentURL + `/${productId}`);
  return response.data;
};

const addProduct = async data => {
  const response = await RequestHandler.post(componentURL, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

const updateProduct = async (id, data) => {
  const response = await RequestHandler.put(componentURL + `/${id}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if ((response.status === 204) | (response.status === 200)) {
    return response;
  } else {
    console.error('Failed to update product', response);
    return null;
  }
};

const deleteProduct = async id => {
  try {
    const response = await RequestHandler.del(componentURL + `/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if ((response.status === 204) | (response.status === 200)) {
      return response;
    } else {
      console.error('Failed to delete product:', response);
      return null;
    }
  } catch (error) {
    console.error('Error during delete request:', error);
  }
};

const ProductApi = {
  getProducts,
  getProductsByName,
  getProductsByPrice,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};

export default ProductApi;
