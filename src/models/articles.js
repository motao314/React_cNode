import api from "../assets/api";
export default {
    namespace: "articles",
    state:{
        articles: [],
        count: 0,
        limit: 0,
        page: 0,
        pages: 0,
    },
    reducers: {
       upload(state,payload){
            return payload.data;
       } 
    },
    effects: {
        *getData({categoryId,page},{call,put}){
            let data;
            if(page==="1"){
                const topRes = yield call(api.getArticles,{top:1});
                const topData = topRes.data.results.articles;
                const res = yield call(api.getArticles,{categoryId,page,limit:20-topData.length});
                data = res.data.results;
                data.articles = topData.concat(data.articles);    
            } else {
                const res = yield call(api.getArticles,{categoryId,page});
                data = res.data.results;
            }
            yield put({
                type: "upload",
                data
            })
        }
    }
}
