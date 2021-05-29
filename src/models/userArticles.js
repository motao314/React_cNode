import api from "../assets/js/api";
export default {
    namespace: "userArcticles",
    state:{
        
    },
    reducers: {
        
    },
    effects: {
        *getData({id,page},{put,call}){
            const res = yield call(api.userArticles,{userId:id,page});
            console.log(res);
        }
    }
}
