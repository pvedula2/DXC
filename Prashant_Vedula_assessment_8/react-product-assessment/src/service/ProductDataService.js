import axios from 'axios'
const PRODUCT_AP_URL='http://localhost:8001/product';
class ProductDataService
{
    getAllProducts(){
       return axios.get(`${PRODUCT_AP_URL}`);

    }
    deleteProduct(productId){
        return axios.delete(`${PRODUCT_AP_URL}/${productId}`);

    }
getProduct(productId){
        return axios.get(`${PRODUCT_AP_URL}/${productId}`);

    }
    updateProduct(product){
        return axios.put(`${PRODUCT_AP_URL}`,product);

    }
    addProduct(product){
        return axios.post(`${PRODUCT_AP_URL}`,product);

    }
    searchProductByName(productName){
        return axios.get(`${PRODUCT_AP_URL}/byName/${productName}`);
    }
    


}
export default new ProductDataService;