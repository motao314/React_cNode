import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8888/api",
    timeout: 3000
});
 
const api = {
    // 获取文章列表
    getArticles({tab,page,limit=20}){
        console.log(tab,page);
        return http.get(`/articles?tab=${tab}$page=${page}$limit=${limit}`); 
     }
}



export default api;
