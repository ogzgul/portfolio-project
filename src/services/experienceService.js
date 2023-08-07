import axios from "axios";

export default class ExperienceService{
    getExperience(){
        return axios.get("https://localhost:5001/api/Experiences/GetAllExperience");
    }
}