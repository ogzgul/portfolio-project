import axios from "axios";

export default class TestimonialService{
    getTestimonial(){
        return axios.get("https://localhost:44379/api/Testimonials/GetAllTestimonial");
    }
}