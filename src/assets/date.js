import moment from "moment";
import "moment/locale/zh-cn";
function toNow(time){
    return moment(time).fromNow();
}

export {toNow};