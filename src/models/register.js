import api from "../assets/api";
export default {
    namespace: "register",
    state:{
        status: 0, // 0 等待注册，1 注册成功，2注册失败
        error: ""
    },
    reducers: {
        error(state,payload){
            return {
                status: 2,
                error:payload.error
            };
        },
        init(state,payload){
            return {
                status: 0, 
                error: ""
            }
        },
        succ(state,payload){
            return {
                status: 1,
                error: ""
            }
        }
    },
    effects: {
        *register({username,password,repassword},{call,put}){
            try{
               let res = yield call(api.register,{username,password,repassword});
                yield put({
                    type: "succ"
                })
            } catch(err) {
                yield put({
                    type: "error",
                    error: err.response.data.message
                })

            }
            
        }
    }
}
