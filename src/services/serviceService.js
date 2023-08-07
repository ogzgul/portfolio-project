import axios from "axios";

export default class ServiceService{
    getService(){
        return axios.get("https://localhost:5001/api/Services/GetAllService");
    }
}