import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import useUser from "../hooks/useUser";
function LoginNav({className}){
    const user = useUser();
    const dispatch = useDispatch();
    const logout = useCallback(()=>{
        dispatch({
            type:"user/logout"
        })
    },[])
    return <nav className={className}>
        {
            user?<>
            <Link to="/setting">设置</Link>
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
