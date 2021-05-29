import api from "../assets/js/api";
export default {
    namespace: "userInfo",
    state:{
        avatar: "",
        createdAt: 0,
        id: 1,
        username:""
    },
    reducers: {
        update(state,payload){
            return {
                ...payload
            };
        }
    },
    effects: {
        *getData({id},{put,call}){
            let res = yield call(api.user,{value:id})
            yield put({
                type: "update",
                ...res.data.results
            });
        }
    }
}
