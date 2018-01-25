export default function user(state={
    loading: true,
    data: {
        data:{
            loginname:"",
            avatar_url: "",
            score:0,
            create_at:"",
            recent_topics:[],
            recent_replies:[]
        }
    }
},action) {
    switch(action.type){
        case "USER_UPDATA":
            return {
                loading: true,
                data:state.data
            };
        case "USER_SUCC":
            return {
                loading: false,
                data: action.data.data
            };
        case "USER_ERROR":
            return {
                loading: false,
                data: {
                    data:{
                        loginname:"",
                        avatar_url: "",
                        score:0,
                        create_at:"",
                        recent_topics:[],
                        recent_replies:[]
                    }
                }
            }
        default:
            return state;
    }
}