import { useCallback, useMemo } from "react";
import { Button, Card, List } from "antd";
import useAvatar from "../../hooks/avatar";
import { toNow } from "../../assets/js/date";
import { Link } from "react-router-dom";
import MarkdownText from "../../components/markdownText";
import { useDispatch } from "react-redux";
function ReplyList({loading,articleId,data}) {
    const setAvatar = useAvatar();
    const dispatch = useDispatch();
    const loadMoreFn = useCallback(()=>{
        if(loading.models.replyList){
            return ;
        }
        dispatch({
            type:"replyList/getData",
            articleId,
            page:data.page + 1
        });
    },[data,loading]);
    const loadMore = useMemo(()=>{
        if(data.page>=data.pages){
            return null;
        }
        return <div style={{
            textAlign: "center",
            padding: "10px 0"
        }}>
            <Button onClick={loadMoreFn}>加载更多</Button>
        </div>
    },[data.page,data.pages,loadMoreFn]);
    return <Card
        title={"回复列表"}
        className="contentBox"
    >
        <List
            dataSource={data.replyList}
            loadMore={loadMore}
            loading={loading.models.replyList}
            renderItem={item=>{
                const {userId,content,createdAt,avatar,username} = item;
                return <List.Item>
                  <List.Item.Meta
                      avatar={<Link to={"/user/"+userId}>{setAvatar({src:avatar,size:"large"})}</Link>}
                      title={<><Link to={"/user/"+userId}>{username}</Link> 发表于: {toNow(createdAt)}</>}
                      description = {<MarkdownText>{content}</MarkdownText>}
                  />
                  
            </List.Item>
            }}
        />
    </Card>
}

export default ReplyList;