import axios from 'axios'
const USER_AP_URL='http://10.231.139.245:8002/user';
const MAINTAINANCE_AP_URL='http://localhost:8002/user/maintainance'
class ProductService
{
    getAllUsers(){
       return axios.get(`${USER_AP_URL}`);

    }
    deleteUser(userId){
        return axios.delete(`${USER_AP_URL}/${userId}`);

    }
    getUser(userId){
        return axios.get(`${USER_AP_URL}/${userId}`);

    }
    updateUser(user){
        return axios.put(`${USER_AP_URL}`,user);

    }
    addUser(user){
        return axios.post(`${USER_AP_URL}`,user);

    }
   
    addMaintainance(userId,maintainances){
        console.log(maintainances)
        
        return axios.post(`${maintainances}/${userId}`,maintainances)
    }
   
    
   
    // These methods are working
    getAllMaintainace(userId){
        console.log(userId)
        console.log("All users being called")
        return axios.get(`${USER_AP_URL}/${userId}/maintainance`)
    }
    updateMaintainance(maintainId,userId,maintainances){
        console.log("Inside update maintainance")
        console.log(userId)

        return axios.put(`${USER_AP_URL}/${userId}/maintainance/${maintainId}`,maintainances)
    }
    getMaintainace(userId,maintainId){
        console.log("To get one maintainance")
        return axios.get(`${USER_AP_URL}/${userId}/maintainance/${maintainId}`)
    }
    addMaintainance(userId,maintainances){
        console.log(maintainances)
        
        return axios.post(`${USER_AP_URL}/${userId}/maintainance`,maintainances)
    }
    deleteMaintainace(userId,maintainId){
        console.log("inside delete review")
        return axios.delete(`${USER_AP_URL}/${userId}/maintainance/${maintainId}`)
    }
    login(email){
        console.log("Inside Email")
        return axios.get(`${USER_AP_URL}/login/${email}/`)

    }
    


}
export default new ProductService;