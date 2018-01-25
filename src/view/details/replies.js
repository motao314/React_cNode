import React,{Component} from "react";
import {Link} from "react-router-dom";
import {Card, List, Avatar} from "antd";
export default class ReplyList extends Component{
    render(){
        let {loading,reply_count,replies} = this.props;
        reply_count = reply_count?reply_count+"条":"";
        console.log(this.props);
        return (<Card
            loading = {loading}
            title = {reply_count + "回复"}
            type = "inner"
        >
            <List
                className = "replyList"
                dataSource={replies}
                itemLayout = "vertical"
                renderItem = {item=>{
                    return (
                        <List.Item
                            key={item.id}
                            extra={item.ups.length>0?(<span>有{item.ups.length}个人赞了这条回复</span>):""}
                        >
                              <List.Item.Meta
                                  avatar={<Avatar src={item.author.avatar_url}/>}
                                  description = {<span><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link> 发表于: {item.create_at.split("T")[0]}</span> }
                              />
                                <div dangerouslySetInnerHTML={
                                    {
                                        __html: item.content
                                    }
                                }>

                                </div>
                        </List.Item>
                    );
                }}
            >
            </List>
        </Card>);
    }
}