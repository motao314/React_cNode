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
            const res = yield call(api.getArticles,{categoryId,page});
            yield put({
                type: "upload",
                data: res.data.results
            })
        }
    }
}
