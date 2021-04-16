import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
function LoginNav({className}){
    return <nav className={className}>
         <>
             <Link to="/login">登录</Link>
             <span>|</span>
             <Link to="/register">注册</Link>
         </>
         {/* <>
             <Link to="/setting">设置</Link>
             <span> | </span>
             <a>退出</a>
         </>    */}
    </nav>
}

export default LoginNav;
