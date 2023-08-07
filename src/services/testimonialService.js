import axios from "axios";

export default class TestimonialService{
    getTestimonial(){
        return axios.get("https://localhost:5001/api/Testimonials/GetAllTestimonial");
    }
}