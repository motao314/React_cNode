import axios from "axios";
import qs from "qs";
const http = axios.create({
    baseURL: "/dataapi"
});
 
const api = {
    // 获取文章列表
    getArticles({categoryId=0,page=1,top=0,limit=20}){
        return http.get(`/articles?categoryId=${categoryId}&top=${top}&page=${page}&limit=${limit}`); 
    },
    getCategories(){
        return http.get(`/categories`)
    },
    register({username="",password="",repassword=""}){
        return http.post("/auth/register",qs.stringify({
            username,
            password,
            repassword
        }))
    },
    login({username="",password=""}){
        return http.post('/auth/login',qs.stringify({username,password}))
    },
    article(id){
        return http.get(`/article/${id}`);
    },
    replyList({articleId,page,limit}){
        return http.get(`/replies?`+qs.stringify({articleId,page,limit}))
    },
    reply({articleId,content,authorization}){
        return http.post('/reply',qs.stringify({articleId,content}),{
            headers:{
                authorization
            }
        })
    },
    user({value}){
        return http.get('/user/profile?'+qs.stringify({value}));
    },
    userArticles({userId,page,limit=5}){
        return http.get('/user/articles?'+qs.stringify({userId,page,limit}));
    },
    userReplies({userId,page,limit=5}){
        return http.get('/user/replies?'+qs.stringify({userId,page,limit}));
    },
    createTopic({categoryId,title,content,authorization}){
        return http.post('/article',qs.stringify({categoryId,title,content}),{
            headers:{
                authorization
            }
        })
    }   
}



export default api;
