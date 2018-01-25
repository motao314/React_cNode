import React,{Component} from "react";
import {Card, List, Avatar} from "antd";
import {Link} from "react-router-dom";
export default class UserList extends Component {
    render(){
        const {loading,data,title} = this.props;
        return (<Card
            loading = {loading}
            title = {title}
            type = "inner"
        >
            <List
                className = "userInfoList"
                loading={loading}
                dataSource={data}
                itemLayout = "vertical"
                renderItem={item=>{
                    return (
                        <List.Item
                            key = {item.id}
                        >
                            <Avatar src={item.author.avatar_url}/>
                            <Link className="user" to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                            <h4><Link to={"/details/"+item.id}>{item.title}</Link></h4>
                            {item.last_reply_at?<time>{"最后回复: "+item.last_reply_at.split("T")[0]}</time>:""}
                        </List.Item>
                    );
                }
                }
            />
        </Card>);
    }
}