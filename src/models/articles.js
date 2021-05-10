import api from "../assets/js/api";
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
            const res = yield call(api.getArticles,{categoryId,page});
            data = res.data.results;
            yield put({
                type: "upload",
                data
            })
        }
    }
}
