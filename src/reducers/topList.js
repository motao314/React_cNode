export default function topList(state={
    loading: true,
    data: {}
},action) {
    switch(action.type){
        case "TOPLIST_UPDATA":
            return {
                loading: true,
                data:state.data
            };
        case "TOPLIST_SUCC":
            return {
                loading: false,
                data: action.data.data
            };
        case "TOPLIST_ERROR":
            return {
                loading: false,
                data: {
                    data:[]
                }
            }
        default:
            return state;
    }
}