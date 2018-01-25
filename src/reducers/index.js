import {combineReducers} from "redux";
import topList from "./topList";
import topDetails from "./topDetails";
import user from "./user";
let Reducers = combineReducers({
    topList,
    topDetails,
    user
});
export default Reducers;