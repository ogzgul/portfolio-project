import axios from "axios";

export default class PortfolioService{
    getPortfolio(){
        return axios.get("https://localhost:44379/api/Portfolios/GetAllPortfolio")
    }
}