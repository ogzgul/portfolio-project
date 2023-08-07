import axios from "axios";

export default class SkillService{
    getSkill(){
        return axios.get("https://localhost:5001/api/Skills/GetAllSkill");
    }
}