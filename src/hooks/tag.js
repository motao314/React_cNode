import { Tag } from "antd";
import useTabs from "./useTabs";

const types = {
    0: "#87d068",
    1: "red",
    2: "cyan",
    3: "purple"
};
function useTag(){
    const categories = useTabs();
    return ({isTop,categoryId})=>{ 
        console.log(isTop);
        return <Tag color={types[isTop?0:categoryId]}>{isTop?"置顶":categories.filter(item=>item.id===categoryId)[0]["name"]}</Tag>
    }
}

export default useTag;