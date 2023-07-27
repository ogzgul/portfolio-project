import axios from "axios";

export default class ServiceService{
    getService(){
        return axios.get("https://localhost:44379/api/Services/GetAllService");
    }
}