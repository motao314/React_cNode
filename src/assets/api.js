import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8888/api",
    timeout: 3000
});
// 获取文章列表
function getArticles(tab,page,limit){
   return http.get(`/articles?tab=${tab}$page=${page}$limit=${limit}`); 
}

export {getArticles}
