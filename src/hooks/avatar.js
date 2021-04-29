import { Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons"
function useAvatar(){
    return ({src,size="small",shape="circle"})=>{
        return <Avatar src={src} size={size} icon={<UserOutlined />} shape={shape} />
    }
}

export default useAvatar;

