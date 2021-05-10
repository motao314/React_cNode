import moment from "moment";
import "moment/locale/zh-cn";
function toNow(time){
    const disTime = Date.now() - time;
    if(disTime > 2592000000){
        return moment().format("YYYY-MM-DD");
    }
    return moment(time).fromNow();
}

export {toNow};