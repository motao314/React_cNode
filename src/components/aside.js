import AsideBox from "./asideBox";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { Button, List } from "antd";
import linksData from "../assets/js/linksData";
import useAvatar from "../hooks/avatar";
function Aside() {
    const user = useUser();
    const avatar = useAvatar();
    console.log(user);
    return <aside className="pageAside">
        {user ?
            <AsideBox
                title={"个人信息"}
            >
                <div>
                    <Link to={"/user/"+user.id}>{avatar({src:user.avatar,size:60,shape:"square"})}</Link>
                    <Link to={"/user/"+user.id} className="username">{user.username}</Link>
                </div>
                <Link className="createTopicBtn" to="/topic/create"><Button type="primary">发布新话题</Button></Link>
            </AsideBox>
            :
            <AsideBox
                title={"CNode：Node.js专业中文社区"}
            >
                <p>您可以 <Link to="/login">登录</Link> 或 <Link to="/register">注册</Link></p>
            </AsideBox>
        }
        <AsideBox
            title={"关于"}
        >
            <p>CNode：Node.js专业中文社区</p>
            <p>在这里你可以：</p>
            <ul>
                <li>向别人提出你遇到的问题</li>
                <li>帮助遇到问题的人</li>
                <li>分享自己的知识</li>
                <li>和其它人一起进步</li>
            </ul>
        </AsideBox>
        <AsideBox
            title={"友情链接"}
        >
            <List
                dataSource={linksData}
                grid={{
                    column: 3,
                    gutter: 3
                }}
                className="linksList"
                renderItem={item => {
                    return <List.Item>
                        <a href={item.link} target="_blank" title={item.title} rel="noreferrer">
                            <img
                                src={item.icon}
                            />
                        </a>
                    </List.Item>
                }}
            />
        </AsideBox>
    </aside>
}
export default Aside;