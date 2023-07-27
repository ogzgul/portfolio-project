import axios from "axios";

export default class ExperienceService{
    getExperience(){
        return axios.get("https://localhost:44379/api/Experiences/GetAllExperience");
    }
}