import axios from "axios";

export default class SkillService{
    getSkill(){
        return axios.get("https://localhost:44379/api/Skills/GetAllSkill");
    }
}