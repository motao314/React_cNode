import React,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";
import {List, Avatar, Tag, Col, Pagination} from "antd";
const tabSchema = {
    all: '全部',
    good: '精华',
    share: '分享',
    ask: '问答',
    job: '招聘',
    dev: '测试',
};
class IndexList extends Component{
    constructor(arg){
        super(arg);
        let path = this.props.location.pathname.split("/");
        this.state = {
            loading: this.props.loading,
            data: this.props.data,
            page: 1,
            tab: path[path.length-1]
        }
    }
    componentDidMount(){
        const {tab,page} = this.state;
        this.updata(tab,page);
    }
    componentWillReceiveProps(nextProps){
        let path = nextProps.location.pathname.split("/");
        let tab = path[path.length-1];
        if(tab !== this.state.tab){
            this.setState({
                tab,
                page: 1
            });
            this.updata(tab,1);
            return false;
        }
        this.setState({
            loading: nextProps.loading,
            data: nextProps.data
        });
    }
    updata(tab,page){
        this.props.dispatch(function(dispatch,getState){
            dispatch({
                type: "TOPLIST_UPDATA"
            });
            axios.get('https://cnodejs.org/api/v1/topics?tab='+tab+'&limit=20&page='+page)
                .then(function(res){
                    dispatch({
                        type: "TOPLIST_SUCC",
                        data: res
                    });
                })
                .catch(function(res){
                    dispatch({
                        type: "TOPLIST_ERROR"
                    });
                })
        });
    }
    render(){
        const {loading,data} = this.state;
        console.log(this.props);
        return (<Col md={18} xs={24} className="indexList">
                <List
                loading={loading}
                dataSource = {data.data}
                renderItem={(item)=>{
                    return (
                        <List.Item actions={[<span style={{marginLeft: "35px"}}>回复{item.reply_count}</span>, <span>访问:{item.visit_count}</span>]} key={item.id}>
                        <List.Item.Meta
                            style={{minWidth:"200px"}}
                            avatar={<Avatar src={item.author.avatar_url} />}
                            title={(<div>
                                <Tag
                                    color={
                                        item.top ?
                                            'magenta' :
                                            item.good ?
                                                'green' :
                                                'geekblue'
                                    }
                                >
                                    { item.top ? '置顶' : item.good ? '精华' : tabSchema[item.tab] ? tabSchema[item.tab] : '分享' }
                                </Tag>
                                <Link to={"/details/"+item.id}>{item.title}</Link>
                            </div>)}
                            description={<span><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>发表于:{item.create_at.split("T")[0]}</span>}
                        />
                    </List.Item>)
                }}
            >
            </List>
            {(!loading&&data.data.length>0)?<Pagination showQuickJumper defaultCurrent={this.state.page} total={500} onChange={(page)=>{
                this.setState({
                    page
                });
                this.updata(this.state.tab,page);
            }} />:""}
        </Col>);
    }
}
export default connect((state)=>(state.topList))(IndexList);