import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8888/api",
    timeout: 3000
});
 
const api = {
    // 获取文章列表
    getArticles({categoryId,page,limit=20}){
        return http.get(`/articles?categoryId=${categoryId}&top=0&page=${page}&limit=${limit}`); 
    },
    getCategories(){
        return http.get(`/categories`)
    }
}



export default api;
