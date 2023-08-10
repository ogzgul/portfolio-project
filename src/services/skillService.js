import axios from "axios";

export default class SkillService{
    getSkill(){
        return axios.get("https://localhost:5001/api/Skills/GetAllSkill");
    }

    addSkill(skills){
        return axios.post("https://localhost:5001/api/Skills/AddSkill",skills);
    }
}