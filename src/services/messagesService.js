import axios from "axios";

export default class MessagesService{
    getContact(){
        return axios.get("https://localhost:5001/api/Contacts/GetAllContact");
    }
}