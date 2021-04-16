import api from "../assets/api";
const user = window.localStorage.getItem("user")
export default {
    namespace: "user",
    state:{
        status: 0,
        error: "",
        user: user?JSON.parse(user):{}
    },
    reducers: {
        setUser(state,payload){
            return {
                status: 1,
                error: "",
                user:payload.user
            }
        },
        error(state,payload){
            return {
                status: 2,
                error: payload.error,
                user: {}
            }
        },
        init(state,payload){
            return {
                status:0,
                error: "",
                user: payload.user?payload.user:state.user
            }
        }
    },
    effects: {
        *login({username,password},{call,put}){
            try{
                const res = yield call(api.login,{username,password});
                const user = {
                    ...res.data.results,
                    authorization: res.headers.authorization
                };
                window.localStorage.setItem("user",JSON.stringify({user}));
                yield put({
                    type: "setUser",
                    user: user
                });
            } catch(err){
                yield put({
                    type: "error",
                    error: err.response.data.message
                })    
            }
        },
        *logout(payload,{put}){
            window.localStorage.removeItem("user");
            yield put({
                type: "init",
                user: {}
            });
        }
    }
}
