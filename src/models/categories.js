import api from "../assets/api";
export default {
    namespace: "categories",
    state:[],
    reducers: {
       upload(state,payload){
            return payload.data;
       } 
    },
    effects: {
        *getData(payload,{call,put}){
            const res = yield call(api.getCategories);
            const data = [{
                id: 0, name: "全部", createdAt: 0
            },...res.data.results]
            yield put({
                type: "upload",
                data
            })
        }
    }
}
