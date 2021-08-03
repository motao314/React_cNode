import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import useUser from "../hooks/useUser";
import AvatarPopup from "./avatarPopup";
function LoginNav({className}){
    const user = useUser();
    const dispatch = useDispatch();
    const logout = useCallback(()=>{
        dispatch({
            type:"user/logout"
        })
    },[]);
    const setAvatar = useCallback((avatar)=>{
        dispatch({
            type: "user/setAvatar",
            avatar
        })
    },[]);
    const [visible,setVisible] = useState(false);
    return <nav className={className}>
        {
            user?<>
            <AvatarPopup 
                user={user}
                setAvatarSrc={setAvatar}
                visible={visible}
                setVisible={setVisible}
            />
            <a onClick={()=>{
                setVisible(true);
            }}>{user.username}</a>
            <span> | </span>
            <a onClick={logout}>退出</a>
        </>:<>
             <Link to="/login">登录</Link>
             <span>|</span>
             <Link to="/register">注册</Link>
         </>
        }
    </nav>
}

export default LoginNav;
