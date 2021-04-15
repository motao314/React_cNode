import { Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons"
function useAvatar(){
    return ({src,size="small"})=>{
        return <Avatar src={src} size={size} icon={<UserOutlined />}  />
    }
}

export default useAvatar;

