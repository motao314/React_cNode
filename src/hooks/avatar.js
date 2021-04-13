import { Avatar} from "antd";
function useAvatar(){
    return ({src,size="small"})=>{
        return <Avatar src={src} size={size} icon="user"  />
    }
}

export default useAvatar;

