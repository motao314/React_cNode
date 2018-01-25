import React,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Card,Tag, Avatar} from "antd";
import axios from "axios";
import ReplyList from "./replies";
const tabSchema = {
    all: '全部',
    good: '精华',
    share: '分享',
    ask: '问答',
    job: '招聘',
    dev: '测试',
};
class Details extends Component{
    constructor(arg){
        super(arg);
        let id = this.props.match.params.id;
        this.state={
            id,
            data: this.props.data.data,
            loading: this.props.loading
        }
        this.updata(id);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            data: nextProps.data.data,
            loading: nextProps.loading
        })
    }
    updata(id){
        this.props.dispatch(function(dispatch){
            dispatch({
                type:"Details_UPDATA"
            });
            axios.get('https://cnodejs.org/api/v1/topic/'+id)
                .then(function(res){
                     dispatch({
                         type: "Details_SUCC",
                         data: res
                     });
                })
                .catch(function(res){
                    dispatch({
                        type: "Details_ERROR"
                    });
                })
        });
    }
    render(){
        const {data,loading} = this.state;
        const {reply_count,replies} = data;
        const Title = (
            <div>
                <h2>{data.title}</h2>
                <div style={{display:"flex",alignItems:"center"}}>
                    <Tag
                        color={
                            data.top ?
                                'magenta' :
                                data.good ?
                                    'green' :
                                    'geekblue'
                        }
                    >
                        { data.top ? '置顶' : data.good ? '精华' : tabSchema[data.tab] ? tabSchema[data.tab] : '分享' }
                    </Tag>
                    <Avatar src={data.author.avatar_url} style={{margin:"0 5px"}} size="small" />
                    <Link to={"/user/"+data.author.loginname}>{data.author.loginname}</Link>
                    <span style={{marginLeft:"5px"}}>发表于：{data.create_at.split("T")[0]}</span>
                </div>
            </div>
        );
        return (
        <div
            className="mainWrap"
            id="detailsWrap"
        >
            <Card
                loading = {loading}
                title={Title}
            >
                <div dangerouslySetInnerHTML={
                    {__html:data.content}
                }></div>
            </Card>
            <ReplyList
                loading = {loading}
                reply_count = {reply_count}
                replies = {replies}
            >
            </ReplyList>
        </div>);
    }
}
export default connect(state=>(state.topDetails))(Details);