import api from "../assets/api";
export default {
    namespace: "register",
    state:{
        error:{}
    },
    reducers: {},
    effects: {
        *register(payload,{call,put}){
            const res = yield call(api.results);
            console.log(res);
        }
    }
}
