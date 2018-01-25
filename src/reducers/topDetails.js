export default function topDetails(state={
    loading: true,
    data: {
        data:{
            reply_count: 0,
            replies:[],
            author:{},
            create_at:""
        }
    }
},action) {
    switch(action.type){
        case "Details_UPDATA":
            return {
                loading: true,
                data:state.data
            };
        case "Details_SUCC":
            return {
                loading: false,
                data: action.data.data
            };
        case "Details_ERROR":
            return {
                loading: false,
                data: {
                    data:{
                        reply_count: 0,
                        replies:[],
                        author:{},
                        create_at:""
                    }
                }
            }
        default:
            return state;
    }
}