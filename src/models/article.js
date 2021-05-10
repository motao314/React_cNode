import api from "../assets/js/api";
export default {
    namespace: "article",
    state:{
    },
    reducers: {
       upload(state,payload){
            return payload.data;
       } 
    },
    effects: {
        *getData({id},{call,put}){
            let data = yield api.article(id);
            yield put({
                type: "upload",
                data: data.data.results
            })
        }
    }
}
