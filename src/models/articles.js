import api from "../assets/api";
export default {
    namespace: "articles",
    state:[
    ],
    reducers: {
       upload(state,payload){
            return state;
       } 
    },
    effects: {
        *getArticles({tab,page},{call,put}){
            const res = yield call(api.getArticles,{tab,page});
            console.log(res);
        }
    }
}
