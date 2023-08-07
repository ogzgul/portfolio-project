import axios from "axios";

export default class PortfolioService{
    getPortfolio(){
        return axios.get("https://localhost:5001/api/Portfolios/GetAllPortfolio")
    }
}