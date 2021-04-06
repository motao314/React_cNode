import { Menu } from "antd";
import {Link} from "react-router-dom";
function Nav({data,theme="dark",getKey=()=>{},...props}){
    const key = getKey() + "";
    return <Menu
        {...props}
        theme={theme}
        mode="horizontal"
        selectedKeys={[key]}
    >
        {data.map((item,index)=>(<Menu.Item key={index}>
            <Link to={item.to}>{item.title}</Link>
        </Menu.Item>))}    
    </Menu>
}
export default Nav;
