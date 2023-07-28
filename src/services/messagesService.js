import axios from "axios";

export default class MessagesService{
    getContact(){
        return axios.get("https://localhost:44379/api/Contacts/GetAllContact");
    }
}