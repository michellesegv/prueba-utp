import ApiGetProducts from '../api/api';

const getProducts = async () => {
  const response = await ApiGetProducts();
  return response;
};

export default getProducts;
